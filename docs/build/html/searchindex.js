Search.setIndex({docnames:["index","locsearch","locsearch.evaluation","locsearch.io","locsearch.localsearch","locsearch.localsearch.acceptance","locsearch.localsearch.move","locsearch.localsearch.simulatedannealing","locsearch.localsearch.steepestdescent","locsearch.random","locsearch.runner","locsearch.solution","locsearch.termination","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["index.rst","locsearch.rst","locsearch.evaluation.rst","locsearch.io.rst","locsearch.localsearch.rst","locsearch.localsearch.acceptance.rst","locsearch.localsearch.move.rst","locsearch.localsearch.simulatedannealing.rst","locsearch.localsearch.steepestdescent.rst","locsearch.random.rst","locsearch.runner.rst","locsearch.solution.rst","locsearch.termination.rst","modules.rst"],objects:{"":{locsearch:[1,0,0,"-"]},"locsearch.evaluation":{abstract_evaluation_function:[2,0,0,"-"],tsp_evaluation_function:[2,0,0,"-"]},"locsearch.evaluation.abstract_evaluation_function":{AbstractEvaluationFunction:[2,1,1,""]},"locsearch.evaluation.abstract_evaluation_function.AbstractEvaluationFunction":{delta_evaluate:[2,2,1,""],evaluate:[2,2,1,""]},"locsearch.evaluation.tsp_evaluation_function":{TspEvaluationFunction:[2,1,1,""]},"locsearch.evaluation.tsp_evaluation_function.TspEvaluationFunction":{_distance_matrix:[2,3,1,""],_size:[2,3,1,""],delta_evaluate:[2,2,1,""],evaluate:[2,2,1,""]},"locsearch.io":{tsplib:[3,0,0,"-"]},"locsearch.io.tsplib":{read_tsplib:[3,4,1,""]},"locsearch.localsearch":{abstract_local_search:[4,0,0,"-"],acceptance:[5,0,0,"-"],move:[6,0,0,"-"],simulatedannealing:[7,0,0,"-"],steepestdescent:[8,0,0,"-"]},"locsearch.localsearch.abstract_local_search":{AbstractLocalSearch:[4,1,1,""]},"locsearch.localsearch.abstract_local_search.AbstractLocalSearch":{run:[4,2,1,""]},"locsearch.localsearch.acceptance":{abstract_acceptance_function:[5,0,0,"-"],simulated_annealing_acceptance_function:[5,0,0,"-"]},"locsearch.localsearch.acceptance.abstract_acceptance_function":{AbstractAcceptanceFunction:[5,1,1,""]},"locsearch.localsearch.acceptance.abstract_acceptance_function.AbstractAcceptanceFunction":{accept:[5,2,1,""]},"locsearch.localsearch.acceptance.simulated_annealing_acceptance_function":{SimulatedAnnealingAcceptanceFunction:[5,1,1,""]},"locsearch.localsearch.acceptance.simulated_annealing_acceptance_function.SimulatedAnnealingAcceptanceFunction":{_diff_multiplier:[5,3,1,""],_multiplier:[5,3,1,""],accept:[5,2,1,""]},"locsearch.localsearch.move":{abstract_move:[6,0,0,"-"],array_swap:[6,0,0,"-"],tsp_array_swap:[6,0,0,"-"]},"locsearch.localsearch.move.abstract_move":{AbstractMove:[6,1,1,""]},"locsearch.localsearch.move.abstract_move.AbstractMove":{get_moves:[6,2,1,""],get_random_move:[6,2,1,""],move:[6,2,1,""],undo_move:[6,2,1,""]},"locsearch.localsearch.move.array_swap":{ArraySwap:[6,1,1,""]},"locsearch.localsearch.move.array_swap.ArraySwap":{_size:[6,3,1,""],changed_distances:[6,2,1,""],get_moves:[6,2,1,""],get_random_move:[6,2,1,""],move:[6,2,1,""],transform_next_index_to_current_index:[6,5,1,""],undo_move:[6,2,1,""]},"locsearch.localsearch.move.tsp_array_swap":{TspArraySwap:[6,1,1,""]},"locsearch.localsearch.move.tsp_array_swap.TspArraySwap":{_size:[6,3,1,""],get_moves:[6,2,1,""],get_random_move:[6,2,1,""]},"locsearch.localsearch.simulatedannealing":{abstr_iterations_temp_function:[7,0,0,"-"],abstract_cooling_function:[7,0,0,"-"],cnst_iterations_temp_function:[7,0,0,"-"],geometric_cooling_function:[7,0,0,"-"],simulated_annealing:[7,0,0,"-"]},"locsearch.localsearch.simulatedannealing.abstr_iterations_temp_function":{AbstrIterationsTempFunction:[7,1,1,""]},"locsearch.localsearch.simulatedannealing.abstr_iterations_temp_function.AbstrIterationsTempFunction":{get_iterations:[7,2,1,""]},"locsearch.localsearch.simulatedannealing.abstract_cooling_function":{AbstractCoolingFunction:[7,1,1,""]},"locsearch.localsearch.simulatedannealing.abstract_cooling_function.AbstractCoolingFunction":{next_temperature:[7,2,1,""]},"locsearch.localsearch.simulatedannealing.cnst_iterations_temp_function":{CnstIterationsTempFunction:[7,1,1,""]},"locsearch.localsearch.simulatedannealing.cnst_iterations_temp_function.CnstIterationsTempFunction":{_iterations:[7,3,1,""],get_iterations:[7,2,1,""]},"locsearch.localsearch.simulatedannealing.geometric_cooling_function":{GeometricCoolingFunction:[7,1,1,""]},"locsearch.localsearch.simulatedannealing.geometric_cooling_function.GeometricCoolingFunction":{_alpha:[7,3,1,""],next_temperature:[7,2,1,""]},"locsearch.localsearch.simulatedannealing.simulated_annealing":{SimulatedAnnealing:[7,1,1,""]},"locsearch.localsearch.simulatedannealing.simulated_annealing.SimulatedAnnealing":{_acceptance_function:[7,3,1,""],_cooling_function:[7,3,1,""],_iterations_for_temp_f:[7,3,1,""],_solution:[7,3,1,""],_temperature:[7,3,1,""],_termination_criterion:[7,3,1,""],run:[7,2,1,""]},"locsearch.localsearch.steepestdescent":{steepest_descent:[8,0,0,"-"]},"locsearch.localsearch.steepestdescent.steepest_descent":{SteepestDescent:[8,1,1,""]},"locsearch.localsearch.steepestdescent.steepest_descent.SteepestDescent":{_solution:[8,3,1,""],_termination_criterion:[8,3,1,""],run:[8,2,1,""]},"locsearch.runner":{abstract_runner:[10,0,0,"-"],simulated_annealing_runner:[10,0,0,"-"],steepest_descent_runner:[10,0,0,"-"]},"locsearch.runner.abstract_runner":{AbstractRunner:[10,1,1,""]},"locsearch.runner.abstract_runner.AbstractRunner":{define_algorithm:[10,2,1,""],define_evaluation_function:[10,2,1,""],define_move_function:[10,2,1,""],define_solution:[10,2,1,""],define_termination_criterion:[10,2,1,""],output:[10,2,1,""],read:[10,2,1,""],results:[10,3,1,""],run:[10,2,1,""],run_algorithm:[10,2,1,""]},"locsearch.runner.simulated_annealing_runner":{SimulatedAnnealingRunner:[10,1,1,""]},"locsearch.runner.simulated_annealing_runner.SimulatedAnnealingRunner":{_algorithm:[10,3,1,""],_cooling_func:[10,3,1,""],_data:[10,3,1,""],_distance_matrix:[10,3,1,""],_evaluation_function:[10,3,1,""],_i_for_temp:[10,3,1,""],_move_function:[10,3,1,""],_size:[10,3,1,""],_solution:[10,3,1,""],_termination_criterion:[10,3,1,""],define_algorithm:[10,2,1,""],define_cooling_function:[10,2,1,""],define_evaluation_function:[10,2,1,""],define_iteration_temp_f:[10,2,1,""],define_move_function:[10,2,1,""],define_solution:[10,2,1,""],define_termination_criterion:[10,2,1,""],output:[10,2,1,""],read:[10,2,1,""],results:[10,3,1,""],run:[10,2,1,""],run_algorithm:[10,2,1,""]},"locsearch.runner.steepest_descent_runner":{SteepestDescentRunner:[10,1,1,""]},"locsearch.runner.steepest_descent_runner.SteepestDescentRunner":{_algorithm:[10,3,1,""],_data:[10,3,1,""],_distance_matrix:[10,3,1,""],_evaluation_function:[10,3,1,""],_move_function:[10,3,1,""],_size:[10,3,1,""],_solution:[10,3,1,""],define_algorithm:[10,2,1,""],define_evaluation_function:[10,2,1,""],define_move_function:[10,2,1,""],define_solution:[10,2,1,""],output:[10,2,1,""],read:[10,2,1,""],results:[10,3,1,""],run_algorithm:[10,2,1,""]},"locsearch.solution":{abstract_local_search_solution:[11,0,0,"-"],tsp_solution:[11,0,0,"-"]},"locsearch.solution.abstract_local_search_solution":{AbstractLocalSearchSolution:[11,1,1,""]},"locsearch.solution.abstract_local_search_solution.AbstractLocalSearchSolution":{evaluate:[11,2,1,""],evaluate_move:[11,2,1,""],get_moves:[11,2,1,""],get_random_move:[11,2,1,""],move:[11,2,1,""],set_as_best:[11,2,1,""],undo_move:[11,2,1,""]},"locsearch.solution.tsp_solution":{TspSolution:[11,1,1,""]},"locsearch.solution.tsp_solution.TspSolution":{_evaluation_function:[11,3,1,""],_move_function:[11,3,1,""],_order:[11,3,1,""],best_order:[11,3,1,""],best_order_value:[11,3,1,""],evaluate:[11,2,1,""],evaluate_move:[11,2,1,""],get_moves:[11,2,1,""],get_random_move:[11,2,1,""],move:[11,2,1,""],set_as_best:[11,2,1,""],undo_move:[11,2,1,""]},"locsearch.termination":{abstract_termination_criterion:[12,0,0,"-"],max_iterations_termination_criterion:[12,0,0,"-"],max_seconds_termination_criterion:[12,0,0,"-"],min_temperature_termination_criterion:[12,0,0,"-"],must_improve_termination_criterion:[12,0,0,"-"],no_improvement_termination_criterion:[12,0,0,"-"]},"locsearch.termination.abstract_termination_criterion":{AbstractTerminationCriterion:[12,1,1,""]},"locsearch.termination.abstract_termination_criterion.AbstractTerminationCriterion":{check_new_value:[12,2,1,""],check_variable:[12,2,1,""],iteration_done:[12,2,1,""],keep_running:[12,2,1,""],start_timing:[12,2,1,""]},"locsearch.termination.max_iterations_termination_criterion":{MaxIterationsTerminationCriterion:[12,1,1,""]},"locsearch.termination.max_iterations_termination_criterion.MaxIterationsTerminationCriterion":{_iterations:[12,3,1,""],_max_iterations:[12,3,1,""],iteration_done:[12,2,1,""],keep_running:[12,2,1,""]},"locsearch.termination.max_seconds_termination_criterion":{MaxSecondsTerminationCriterion:[12,1,1,""]},"locsearch.termination.max_seconds_termination_criterion.MaxSecondsTerminationCriterion":{_max_seconds:[12,3,1,""],_seconds:[12,3,1,""],_start:[12,3,1,""],iteration_done:[12,2,1,""],keep_running:[12,2,1,""],start_timing:[12,2,1,""]},"locsearch.termination.min_temperature_termination_criterion":{MinTemperatureTerminationCriterion:[12,1,1,""]},"locsearch.termination.min_temperature_termination_criterion.MinTemperatureTerminationCriterion":{_run:[12,3,1,""],check_variable:[12,2,1,""],keep_running:[12,2,1,""],min_temperature:[12,3,1,""]},"locsearch.termination.must_improve_termination_criterion":{MustImproveTerminationCriterion:[12,1,1,""]},"locsearch.termination.must_improve_termination_criterion.MustImproveTerminationCriterion":{_function:[12,3,1,""],_old_best_value:[12,3,1,""],_run:[12,3,1,""],check_new_value:[12,2,1,""],keep_running:[12,2,1,""]},"locsearch.termination.no_improvement_termination_criterion":{NoImprovementTerminationCriterion:[12,1,1,""]},"locsearch.termination.no_improvement_termination_criterion.NoImprovementTerminationCriterion":{_function:[12,3,1,""],_iterations:[12,3,1,""],_max_iterations:[12,3,1,""],_old_best_value:[12,3,1,""],check_new_value:[12,2,1,""],iteration_done:[12,2,1,""],keep_running:[12,2,1,""]},locsearch:{evaluation:[2,0,0,"-"],io:[3,0,0,"-"],localsearch:[4,0,0,"-"],random:[9,0,0,"-"],runner:[10,0,0,"-"],solution:[11,0,0,"-"],termination:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:staticmethod"},terms:{"abstract":10,"boolean":12,"case":[4,11,12],"class":[2,4,5,6,7,8,10,11,12],"default":[5,7,8,10,11,12],"float":[2,5,7,8,11,12],"function":[2,3,5,6,7,8,10,11,12],"import":[2,3,5,6,7,8,10,11,12],"int":[2,3,5,6,7,8,10,11,12],"long":12,"new":[5,7,11,12],"return":[2,3,4,5,6,7,8,10,11,12],"static":6,"true":[5,6,8,11,12],"while":[5,12],AND:12,NOT:11,One:2,TAS:[],The:[2,3,5,6,7,8,10,11,12],Use:10,Using:[5,10],Will:5,With:7,_acceptance_funct:7,_algorithm:10,_alpha:7,_cooling_func:10,_cooling_funct:7,_data:10,_diff:5,_diff_multipli:5,_distance_matrix:[2,10],_evaluation_funct:[10,11],_function:12,_i_for_temp:10,_iter:[7,12],_iterations_for_temp_f:7,_max_iter:12,_max_second:12,_move_funct:[10,11],_multipli:5,_old_best_valu:12,_order:11,_run:12,_second:12,_size:[2,6,10],_solut:[7,8,10],_start:12,_temperatur:7,_termination_criterion:[7,8,10],_valu:5,a_mov:6,abc:[2,4,5,6,7,10,11,12],about:2,absolut:[3,10],abstr_iterations_temp_funct:[1,4],abstract_acceptance_funct:[1,4],abstract_cooling_funct:[1,4],abstract_evaluation_funct:[0,1,13],abstract_local_search:[0,1,7,8,13],abstract_local_search_solut:[0,1,13],abstract_mov:[1,4],abstract_runn:[0,1,13],abstract_termination_criterion:[0,1,13],abstractacceptancefunct:5,abstractcoolingfunct:[7,10],abstractevaluationfunct:[2,10,11],abstractlocalsearch:[4,7,8,10],abstractlocalsearchsolut:[2,7,8,10,11],abstractmov:[2,6,10,11],abstractrunn:[4,10],abstractsolut:[],abstractterminationcriterion:[7,10,12],abstrctlocalsearchobject:[],abstriterationstempfunct:[7,10],accept:[1,4,7],actual:[2,6,11],after:[5,6,11,12],against:2,aid:6,algorithm:[4,7,8,10,12],all:[2,5,6,7,8,11],all_mov:[6,11],alpha:7,also:[2,12],alter:6,alwai:[3,5,6,7,10,11,12],amount:[2,7,10,12],anneal:[5,7,10,12],anoth:6,append:[6,11],arbitrari:6,arbitrarili:5,aren:6,arrai:[2,6,7,8,11,12],array_swap:[1,2,4],arrayswap:[2,6],ask:6,assum:5,ath:11,attempt:5,base:[2,4,5,6,7,8,10,11,12],becaus:[],been:[6,12],befor:12,behaviour:[5,6,7,11,12],being:[5,6],belong:11,best:[4,7,8,11,12],best_ord:[7,8,11],best_order_valu:11,best_valu:[7,8],better:[2,5,11,12],between:[2,5,11,12],big:11,bigger:[5,8,12],bool:[5,8,12],calcul:[2,5,11,12],call:[6,12],can:[3,5,6,8,10,11],caus:11,certain:[5,7,12],chanc:5,chang:[6,11],changed_dist:[2,6,11],check:[5,11,12],check_new_valu:12,check_vari:12,chosen:5,clear:6,cnst_iterations_temp_funct:[1,4],cnstiterationstempfunct:7,code:[2,12],collect:[4,10],column:2,compar:[2,6],concaten:12,consid:[2,8,12],consider:11,construct:11,constructor:[2,6,11],contain:[2,3,4,6,7,8,11,12],content:[0,13],continu:12,convert:3,cool:[7,10],cooling_func:7,cooling_funct:7,correspond:[],count:12,creat:[2,5,6,10,11,12],creation:12,criterion:[7,10,12],crystallographi:3,current:[2,3,5,7,11,12],current_data:2,current_ord:2,current_solut:[2,5],current_temperatur:12,data:[3,6,7,8,10,11],dataset:[6,12],datastructur:2,decreas:5,def:[],define_algorithm:10,define_cooling_funct:10,define_evaluation_funct:10,define_iteration_temp_f:10,define_move_funct:10,define_solut:10,define_termination_criterion:10,delta:[2,5,6,11],delta_evalu:2,delta_valu:5,demonstr:[2,6,11],depend:[6,12],descent:[8,10],determin:[2,5,7,12],dfrac:5,dict:3,dictionari:3,diff_multipli:5,differ:[2,5,6,11,12],dimension:[2,6,7,8,11],directori:3,dist_matrix:2,distanc:[2,3,10,11],distance_matrix:[2,3,7,8,11],doctest:6,doe:[2,10,11,12],doesn:6,doing:5,don:[5,11],done:[6,10],due:6,durat:12,easili:10,effect:[2,11,12],elabor:2,els:12,encount:12,end:[8,12],entri:3,eof:3,epoch:12,equal:[2,5,7,12],equival:[6,11],eval:11,eval_func:2,eval_valu:12,evalu:[0,1,4,6,7,8,10,11,12,13],evaluate_mov:11,evaluation_func:11,evaluation_funct:11,evaluation_valu:11,evaluationfunct:2,everi:[6,12],exact:12,exampl:[2,3,5,6,7,8,10,11,12],execut:[10,12],exist:2,explor:6,extra:12,fals:[5,8,12],faster:2,file:[3,10],filenam:3,finish:12,first:6,format:3,found:[4,7,8,11,12],frac:[],frm:6,from:[2,3,5,6,7,8,10,11,12],gain:11,gener:[3,6,11,12],geometr:7,geometric_cooling_funct:[1,4],geometriccoolingfunct:7,get:[6,7,11,12],get_iter:7,get_mov:[6,11],get_random_mov:[6,11],given:[3,7,8,12],greater:5,had:6,handl:[4,10,11],hardcod:12,has:[6,12],hasn:12,have:[2,5,6,11],haven:11,here:[6,7],heurist:[],higher:[5,12],how:[5,6],howev:11,i_for_temp:7,ident:6,ill:12,implemenat:11,implement:[2,4,6,7,10,11,12],improv:[8,12],improvement_is_bigg:[8,12],includ:6,increment:12,indeic:[],index:[0,6,12],indic:[2,6,11],infinit:12,influenc:7,inform:2,inherit:10,init:[2,5,6,7,8,10,11,12],initi:10,initialis:[10,11,12],instanc:10,intern:12,interv:[2,5,11],isequ:[],isn:[5,12],item:6,iter:[6,7,10,11,12],iteration_don:12,iterations_for_temp_f:7,itert:7,judg:12,just:5,keep_run:12,kept:11,know:[2,5,11],last:[3,12],lead:[5,11],len:6,length:[],less:5,like:[6,11],list:3,littl:5,load:10,local:4,localsearch:[0,1,2,10,11,13],locat:6,logic:4,longer:12,loop:12,lost:11,lower:[2,12],make:[5,6],map:3,math:7,matrix:[2,3,10,11],matter:[6,12],max_iter:12,max_iterations_termination_criterion:[0,1,13],max_second:12,max_seconds_termination_criterion:[0,1,13],maxim:12,maxiterationsterminationcriterion:12,maxsecondsterminationcriterion:12,mean:5,meant:[7,11],measur:12,metadata:3,method:[2,6,10],might:6,min_temperatur:12,min_temperature_termination_criterion:[0,1,7,13],minim:12,mintemperatureterminationcriterion:[7,12],minu:12,modul:[0,13],moment:12,more:[2,5,8,12],move:[1,2,4,7,8,10,11],move_func:[2,11],move_funct:[2,11],move_numb:11,multipl:[],multipli:5,must:5,must_improve_termination_criterion:[0,1,13],mustimproveterminationcriterion:[8,12],name:3,namedtupl:[4,10],ndarrai:[2,3,6,7,8,10,11],necessari:[],need:[2,4,5,6,7,8,10,11,12],neg:5,neigbourhood:11,neighboorhood:11,neighbourhood:[6,11],never:[6,11],next:[2,6,7,11,12],next_temperatur:7,no_improvement_termination_criterion:[0,1,13],noimprovementterminationcriterion:12,non:[11,12],none:[2,11],nor:11,normal:[],not_us:12,note:[2,6,10,11,12],number:[5,7],numpi:[2,3,6,7,8,10,11,12],object:[6,10,11],obvious:7,odd:5,old:[7,12],old_temperatur:7,old_valu:12,onc:[],one:[2,5,6,7,8,11,12],onli:[2,3,4,5,6,10,11,12],option:[2,5,7,8,11,12],order:[2,6,7,8,11],other:[6,10,12],other_solut:[],our:12,output:[3,7,10,12],over:6,own:11,packag:[0,13],page:0,pair:6,paramet:[2,3,5,6,7,8,10,11,12],pars:3,pass:[2,11,12],path:[3,10],path_to_fil:10,perform:[2,6,7,8,10,11],pick:6,plot:[4,10],point:[2,7,8,10,11],pointless:6,posit:[3,5,6,7],possibl:[5,6,12],potenti:[2,5,11],power:5,previou:[11,12],probabl:5,problem:[2,3,6,7,8,10,11],process:5,properli:[2,11],qualiti:[2,5,11],randint:12,random:[0,1,5,6,7,11,12,13],rate:7,read:[3,10],read_tsplib:3,recalcul:11,recheck:11,regular:2,reject:5,rel:[3,10],remain:6,rememb:10,remov:6,repres:[2,6,11],represent:[6,11],respect:6,respons:10,result:[2,5,7,8,10],retriev:[6,11],row:2,run:[4,7,8,10,12],run_algorithm:10,runner:[0,1,13],said:[4,10,11],sake:6,sale:[],same:[5,6,7],save:11,search:[0,4],second:12,seed:[5,6,7],self:[],set:[5,6,11,12],set_as_best:11,set_as_best_ord:11,shape:[7,8,11],should:[2,4,5,6,7,8,11,12],show:[6,11],simmul:[],simpl:[2,5,6,7,8,11,12],simpli:[6,11],simul:[5,7,10,12],simulated_ann:[1,4],simulated_annealing_acceptance_funct:[1,4],simulated_annealing_runn:[0,1,13],simulatedann:[1,4],simulatedannealingacceptancefunct:[5,7],simulatedannealingrunn:10,sinc:[6,12],singl:6,size:[2,6,7,8,11,12],small:11,smaller:[5,7,8,12],solut:[0,1,2,5,6,7,8,10,12,13],solutionobject:[],solv:6,some:6,specif:[7,8,11,12],speedup:11,start:[4,6,7,8,10,11,12],start_temperatur:7,start_tim:12,state:[2,5,6,11],steepest:[8,10],steepest_desc:[1,4],steepest_descent_runn:[0,1,13],steepestdesc:[1,4,10],steepestdescentrunn:10,stop:12,str:[3,10],structur:3,submodul:[0,1,13],subpackag:[0,13],substract:5,suppos:11,suppress:12,sure:[5,6],swap:6,take:11,temperatur:[5,7,10,12],templat:[2,4,5,6,10,11,12],termin:[0,1,7,10,13],termination_criterion:7,terminationcriterion:12,test:[2,5,6,7,11,12],testfil:3,tha:10,than:[2,5,7,11,12],thei:[5,6],thi:[2,3,4,5,6,7,8,10,11,12],time:[6,11,12],time_pass:12,timer:12,transform:6,transform_next_index_to_current_index:[2,6,11],tsp:[2,3,6,10,11],tsp_array_swap:[1,2,4,7,8,11],tsp_evaluation_funct:[0,1,7,8,11,13],tsp_solut:[0,1,7,8,13],tsparrayswap:[2,6,7,8,11],tspevaluationfunct:[2,7,8,11],tsplib:[0,1,10,13],tspsolut:[7,8,11],tupl:[2,6,11],two:2,type:[2,4,5,6,7,8,10,11,12],unalt:6,undo:[6,11],undo_mov:[6,11],uniqu:[2,6,11],use:[2,5,6,10,11,12],useabl:3,used:[2,5,6,7,10,11,12],useful:3,using:6,valid:[6,11],valu:[2,4,5,6,7,8,11,12],variabl:[10,12],visit:2,want:[6,11],wanted_ord:11,wast:5,weight:2,were:6,what:5,when:[3,5,6,10,11,12],where:6,which:12,who:6,whole:5,wil:12,wish:[2,6,11],within:[2,11],without:12,work:[2,3,5,10,11],wors:[5,12],would:[2,6,11],yet:6,yield:[6,11],you:[5,6,11],your:[7,11],yourself:6},titles:["Welcome to locsearch\u2019s documentation!","locsearch package","locsearch.evaluation package","locsearch.io package","locsearch.localsearch package","locsearch.localsearch.acceptance package","locsearch.localsearch.move package","locsearch.localsearch.simulatedannealing package","locsearch.localsearch.steepestdescent package","locsearch.random package","locsearch.runner package","locsearch.solution package","locsearch.termination package","locsearch"],titleterms:{abstr_iterations_temp_funct:7,abstract_acceptance_funct:5,abstract_cooling_funct:7,abstract_evaluation_funct:2,abstract_local_search:4,abstract_local_search_solut:11,abstract_mov:6,abstract_runn:10,abstract_termination_criterion:12,accept:5,array_swap:6,cnst_iterations_temp_funct:7,content:[1,2,3,4,5,6,7,8,9,10,11,12],document:0,evalu:2,geometric_cooling_funct:7,indic:0,localsearch:[4,5,6,7,8],locsearch:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],max_iterations_termination_criterion:12,max_seconds_termination_criterion:12,min_temperature_termination_criterion:12,modul:[1,2,3,4,5,6,7,8,9,10,11,12],move:6,must_improve_termination_criterion:12,no_improvement_termination_criterion:12,packag:[1,2,3,4,5,6,7,8,9,10,11,12],random:9,runner:10,simulated_ann:7,simulated_annealing_acceptance_funct:5,simulated_annealing_runn:10,simulatedann:7,solut:11,steepest_desc:8,steepest_descent_runn:10,steepestdesc:8,submodul:[2,3,4,5,6,7,8,10,11,12],subpackag:[1,4],tabl:0,termin:12,tsp_array_swap:6,tsp_evaluation_funct:2,tsp_solut:11,tsplib:3,welcom:0}})