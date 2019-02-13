from locsearch.localsearch.abstract_local_search import AbstractLocalSearch

from locsearch.localsearch.acceptance.simulated_annealing_acceptance_function \
    import SimulatedAnnealingAcceptanceFunction

from locsearch.aidfunc.is_improvement_func \
    import bigger, bigger_or_equal, smaller, smaller_or_equal
from locsearch.aidfunc.pass_func import pass_func
from locsearch.aidfunc.add_to_data_func import add_to_data_func
from locsearch.aidfunc.convert_data import convert_data

from collections import namedtuple


class SimulatedAnnealing(AbstractLocalSearch):
    """Performs a simulated annealing algorithm with the given parameters.

    Parameters
    ----------
    solution : AbstractLocalSearchSolution
        Contains all the data needed for the specific problem.
    termination_criterion : AbstractTerminationCriterion
        Implements a termination criterion to terminate the algorithm.
    cooling_function : AbstractCoolingFunction
        Implements the cooling function for the algorithm.
    iterations_for_temp_f : AbstrIterationsTempFunction
        Implements a function to determine the amount of iterations for a
        certain temperature.
    start_temperature : int, optional
        The starting temperature for the simulated annealing. The default is
        2000.
    minimise : bool, optional
        Will minimise if this parameter is True, maximise if it is False.
        The default is True.
    benchmarking : bool, optional
        Should be True if one wishes benchmarks to be kept, should be False if
        one wishes no benchmarks to be made. Default is True.

    Attributes
    ----------
    _solution : AbstractLocalSearchSolution
        Contains all the data needed for the specific problem.
    _termination_criterion : AbstractTerminationCriterion
        Implements a termination criterion to terminate the algorithm.
    _cooling_function : AbstractCoolingFunction
        Implements the cooling function for the algorithm.
    _iterations_for_temp_f : AbstrIterationsTempFunction
        Implements a function to determine the amount of iterations for a
        certain temperature.
    _temperature : int
        The current "temperature".
    _acceptance_function : SimulatedAnnealingAcceptanceFunction
        The acceptance function used.
    _is_improvement
        Function used to determine if a certain delta value is an improvement
        or equal to the current value.
    _is_better
        Function used to determine if a certain value is an improvement.
    data : list of tuple
        Data useable for benchmarking. Will be None if no benchmarks are made.
    _data_append
        Function to append new data-points to data. Will do nothing if no
        benchmarks are made.

    Examples
    --------
    Minimising example:

    .. doctest::

        >>> import numpy
        >>> import random
        >>> from locsearch.localsearch.move.tsp_array_swap import TspArraySwap
        >>> from locsearch.localsearch.simulatedannealing.simulated_annealing \\
        ...     import SimulatedAnnealing
        >>> from locsearch.localsearch.simulatedannealing.geometric_cooling_function \\
        ...     import GeometricCoolingFunction
        >>> from locsearch.localsearch.simulatedannealing.cnst_iterations_temp_function \\
        ...     import CnstIterationsTempFunction
        >>> from locsearch.evaluation.tsp_evaluation_function \\
        ...     import TspEvaluationFunction
        >>> from locsearch.termination.min_temperature_termination_criterion \\
        ...     import MinTemperatureTerminationCriterion
        >>> from locsearch.solution.array_solution import ArraySolution
        ... # seed random
        ... # (used here to always get the same output, this obviously is not
        ... #                                  needed in your implementation.)
        >>> random.seed(0)
        ... # init solution
        >>> distance_matrix = numpy.array(
        ... [[0, 2, 5, 8],
        ...  [2, 0, 4, 1],
        ...  [5, 4, 0, 7],
        ...  [8, 1, 7, 0]])
        >>> size = distance_matrix.shape[0]
        >>> move = TspArraySwap(size)
        >>> evaluation = TspEvaluationFunction(distance_matrix, move)
        >>> solution = ArraySolution(evaluation, move, size)
        ... # init termination criterion
        >>> termination_criterion = MinTemperatureTerminationCriterion()
        ... # init cooling function
        >>> cooling_func = GeometricCoolingFunction()
        ... # init CnstIterationsTempFunction
        ... # (determines amount of itertions in function of the temperature)
        >>> i_for_temp = CnstIterationsTempFunction()
        ... # init SimulatedAnnealing
        >>> algorithm = SimulatedAnnealing(solution, termination_criterion,
        ...                                cooling_func, i_for_temp,
        ...                                benchmarking=False)
        ... # run algorithm
        >>> algorithm.run()
        Results(best_order=array([0, 2, 3, 1]), best_value=15, data=None)

    Maximising example, note that the distance matrix is different:

    .. doctest::

        >>> import numpy
        >>> import random
        >>> from locsearch.localsearch.move.tsp_array_swap import TspArraySwap
        >>> from locsearch.localsearch.simulatedannealing.simulated_annealing \\
        ...     import SimulatedAnnealing
        >>> from locsearch.localsearch.simulatedannealing.geometric_cooling_function \\
        ...     import GeometricCoolingFunction
        >>> from locsearch.localsearch.simulatedannealing.cnst_iterations_temp_function \\
        ...     import CnstIterationsTempFunction
        >>> from locsearch.evaluation.tsp_evaluation_function \\
        ...     import TspEvaluationFunction
        >>> from locsearch.termination.min_temperature_termination_criterion \\
        ...     import MinTemperatureTerminationCriterion
        >>> from locsearch.solution.array_solution import ArraySolution
        ... # seed random
        ... # (used here to always get the same output, this obviously is not
        ... #                                  needed in your implementation.)
        >>> random.seed(0)
        ... # init solution
        >>> distance_matrix = numpy.array(
        ... [[0, 8, 5, 2],
        ...  [8, 0, 4, 7],
        ...  [5, 4, 0, 1],
        ...  [2, 7, 1, 0]])
        >>> size = distance_matrix.shape[0]
        >>> move = TspArraySwap(size)
        >>> evaluation = TspEvaluationFunction(distance_matrix, move)
        >>> solution = ArraySolution(evaluation, move, size)
        ... # init termination criterion
        >>> termination_criterion = MinTemperatureTerminationCriterion()
        ... # init cooling function
        >>> cooling_func = GeometricCoolingFunction()
        ... # init CnstIterationsTempFunction
        ... # (determines amount of itertions in function of the temperature)
        >>> i_for_temp = CnstIterationsTempFunction()
        ... # init SimulatedAnnealing
        >>> algorithm = SimulatedAnnealing(
        ...     solution, termination_criterion,
        ...     cooling_func, i_for_temp, minimise=False,
        ...     benchmarking=False)
        ... # run algorithm
        >>> algorithm.run()
        Results(best_order=array([0, 2, 3, 1]), best_value=21, data=None)

    """

    def __init__(self, solution, termination_criterion,
                 cooling_function, iterations_for_temp_f,
                 start_temperature=2000, minimise=True,
                 benchmarking=True):

        super().__init__()

        self._solution = solution
        self._termination_criterion = termination_criterion
        self._cooling_function = cooling_function
        self._iterations_for_temp_f = iterations_for_temp_f
        self._temperature = start_temperature
        self._acceptance_function = SimulatedAnnealingAcceptanceFunction()

        if minimise:
            self._is_improvement = smaller_or_equal
            self._is_better = smaller
            self._acceptance_function = SimulatedAnnealingAcceptanceFunction()
        else:
            self._is_improvement = bigger_or_equal
            self._is_better = bigger
            self._acceptance_function = \
                SimulatedAnnealingAcceptanceFunction(diff_multiplier=-1)

        if benchmarking:
            self.data = []
            self._data_append = add_to_data_func
        else:
            self.data = None
            self._data_append = pass_func

    def run(self):
        """Starts running the simulated annealing algorithm.

        Returns
        -------
        best_order : numpy.ndarray
            The best found order.
        best_value : int or float
            The evaluation value of the best found order.
        data : list of tuple
            Data useable for benchmarking. If no benchmarks were made, it will
            be None. The tuples contain the following data:
            timestamp, value of solution, best value found
            Note that the timestamp's reference point is undefined.

        """

        # init
        base_value = self._solution.evaluate()
        self._solution.set_as_best(base_value)

        # add to data
        self._data_append(self.data, base_value, base_value)

        # init termination criterion
        self._termination_criterion.check_new_value(base_value)
        self._termination_criterion.start_timing()

        # main loop
        while self._termination_criterion.keep_running():

            # performs iterations at the current temperature
            #
            # it's a for loop that also terminates if the
            # termination criterion says it should.
            for i in range(
                    self._iterations_for_temp_f.get_iterations(
                        self._temperature)):

                if not self._termination_criterion.keep_running():
                    break

                # get and evaluate move
                move = self._solution.get_random_move()
                delta = self._solution.evaluate_move(move)

                # accept or reject move
                if self._is_improvement(0, delta):

                    # better than the current state --> accept
                    self._solution.move(move)
                    base_value = base_value + delta

                    # check if best state
                    if self._is_better(
                            self._solution.best_order_value, base_value):
                        self._solution.set_as_best(base_value)

                    # add to data
                    self._data_append(self.data, base_value,
                                      self._solution.best_order_value)

                else:

                    # worse than current state --> use acceptance function.
                    if self._acceptance_function.accept(
                            delta, self._temperature):
                        self._solution.move(move)
                        base_value = base_value + delta

                        # add to data
                        self._data_append(self.data, base_value,
                                          self._solution.best_order_value)

                self._termination_criterion.check_new_value(base_value)
                self._termination_criterion.iteration_done()

            # lowers the current temperature
            self._temperature = self._cooling_function.next_temperature(
                self._temperature)

            self._termination_criterion.check_variable(self._temperature)

        # if we have data:
        # convert data to something easier to plot
        if self.data is not None:
            data = convert_data(self.data)
        else:
            data = None

        # return results

        Results = namedtuple('Results', ['best_order', 'best_value', 'data'])

        return Results(self._solution.best_order,
                       self._solution.best_order_value,
                       data)
