var suplentes = 0;
var efetivos = 0;
var totalMembros = 0;
const grupos2a2 = ['C-1', 'C-1a', 'C-3', 'C-5', 'C-6', 'C-7a', 'C-10', 'C-11','C-12', 'C-13' ,'C-14' ,'C-15' ,'C-16','C-17' , 'C-18','C-18a', 'C-22', 'C-24', 'C-24b', 'C-34']

const grupos2a1 = ['C-2', 'C-20', 'C-30']

const grupos1a1 = ['C-3a', 'C-4' ,'C-5a' ,'C-7' ,'C-8', 'C-9','C-14a', 'C-19', 'C-21', 'C-23', 'C-24a', 'C-25', 'C-26', 'C-27', 'C-28', 'C-29', 'C-31', 'C-32', 'C-33', 'C-35']



const repeticoes = function(grupo, funcs){
  let parcela = funcs - 10000

  
  let MaisEfetivos = 0;
  let MaisSuplentes = 0;

 if(grupos2a2.includes(grupo)){
     while(parcela >= 2500){

      MaisSuplentes += 2;
      MaisEfetivos += 2;

      parcela -= 2500
     }
 }

 else if(grupos2a1.includes(grupo)){
  while(parcela >= 2500){

   MaisSuplentes += 1;
   MaisEfetivos += 2;
   
   parcela -= 2500
  }
    }
 else if(grupos1a1.includes(grupo)){
      while(parcela >= 2500){

       MaisSuplentes += 1;
       MaisEfetivos += 1;
       
       parcela -= 2500
      }
  }
  
  return [MaisEfetivos, MaisSuplentes]
}



const dimensionaCipa = function (grupo, funcs, div) {

    if(funcs < 20){
        efetivos = 0;
        suplentes = 0;
    }

    else if(funcs < 0){
        alert("Número inválido!")
    }

    switch(grupo){
        case 'C-1':

          if(funcs < 30){
              efetivos = 1;
              suplentes = 1;
          }
          else if(funcs < 51){
            efetivos = 1;
            suplentes = 1;
          }
          else if(funcs < 81){
            efetivos = 3;
            suplentes = 3;
          }
          else if(funcs < 101){
            efetivos = 3;
            suplentes = 3;
          }
          else if(funcs < 121){
            efetivos = 4;
            suplentes = 3;
          }
          else if(funcs < 141){
            efetivos = 4;
            suplentes = 3;
          }
          else if(funcs < 301){
            efetivos = 4;
            suplentes = 3;
          }
          else if(funcs < 501){
            efetivos = 4;
            suplentes = 3;
          }
          else if(funcs < 1001){
            efetivos = 6;
            suplentes = 4;
          }
          else if(funcs < 2501){
            efetivos = 9;
            suplentes = 7;
          }
          else if(funcs < 5001){
            efetivos = 12;
            suplentes = 9;
          }
          else if(funcs > 5000){
            efetivos = 15;
            suplentes = 12;
          }
         break;
        

        case 'C-1a':

            if(funcs < 30){
                efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 51){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 81){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 101){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 121){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 141){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 301){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 501){
              efetivos = 4;
              suplentes = 4;
            }
            else if(funcs < 1001){
              efetivos = 6;
              suplentes = 5;
            }
            else if(funcs < 2501){
              efetivos = 9;
              suplentes = 8;
            }
            else if(funcs < 5001){
              efetivos = 12;
              suplentes = 9;
            }
            else if(funcs > 5000){
              efetivos = 15;
              suplentes = 12;
            }
            break;
          
          

        case 'C-2':

                if(funcs < 30){
                    efetivos = 1;
                    suplentes = 1;
                }
                else if(funcs < 51){
                  efetivos = 1;
                  suplentes = 1;
                }
                else if(funcs < 81){
                  efetivos = 2;
                  suplentes = 2;
                }
                else if(funcs < 101){
                  efetivos = 2;
                  suplentes = 2;
                }
                else if(funcs < 121){
                  efetivos = 3;
                  suplentes = 3;
                }
                else if(funcs < 141){
                  efetivos = 4;
                  suplentes = 3;
                }
                else if(funcs < 301){
                  efetivos = 4;
                  suplentes = 4;
                }
                else if(funcs < 501){
                  efetivos = 5;
                  suplentes = 4;
                }
                else if(funcs < 1001){
                  efetivos = 6;
                  suplentes = 5;
                }
                else if(funcs < 2501){
                  efetivos = 7;
                  suplentes = 6;
                }
                else if(funcs < 5001){
                  efetivos = 10;
                  suplentes = 7;
                }
                else if(funcs > 5000){
                  efetivos = 11;
                  suplentes = 9;
                }
                break;
            
                
               

        case 'C-3':

                    if(funcs < 30){
                        efetivos = 1;
                        suplentes = 1;
                    }
                    else if(funcs < 51){
                      efetivos = 1;
                      suplentes = 1;
                    }
                    else if(funcs < 81){
                      efetivos = 2;
                      suplentes = 2;
                    }
                    else if(funcs < 101){
                      efetivos = 2;
                      suplentes = 2;
                    }
                    else if(funcs < 121){
                      efetivos = 3;
                      suplentes = 3;
                    }
                    else if(funcs < 141){
                      efetivos = 3;
                      suplentes = 3;
                    }
                    else if(funcs < 301){
                      efetivos = 4;
                      suplentes = 4;
                    }
                    else if(funcs < 501){
                      efetivos = 5;
                      suplentes = 4;
                    }
                    else if(funcs < 1001){
                      efetivos = 6;
                      suplentes = 5;
                    }
                    else if(funcs < 2501){
                      efetivos = 7;
                      suplentes = 6;
                    }
                    else if(funcs < 5001){
                      efetivos = 10;
                      suplentes = 8;
                    }
                    else if(funcs > 5000){
                      efetivos = 10;
                      suplentes = 8;
                    }
                    break;
                   
        
        case 'C-3a':

             if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
                efetivos = 0;
                suplentes = 0;
            }
             else if(funcs < 81){
                efetivos = 1;
                 suplentes = 1;
            }
            else if(funcs < 101){
                efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 121){
                efetivos = 2;
                suplentes = 2;
            }
            else if(funcs < 141){
                 efetivos = 2;
                suplentes = 2;
            }
            else if(funcs < 301){
                efetivos = 2;
                suplentes = 2;
            }
            else if(funcs < 501){
                 efetivos = 3;
                suplentes = 3;
             }
            else if(funcs < 1001){
                efetivos = 3;
                suplentes = 3;
            }
            else if(funcs < 2501){
                efetivos = 4;
                suplentes = 3;
            }
            else if(funcs < 5001){
                efetivos = 5;
                suplentes = 4;
            }
            else if(funcs > 5000){
                efetivos = 6;
                 suplentes = 5;
            }
            break;
         


        case 'C-4':
            if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
            }
             else if(funcs < 81){
                efetivos = 1;
                 suplentes = 1;
            }
            else if(funcs < 101){
                efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 121){
                efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 141){
                 efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 301){
                efetivos = 2;
                suplentes = 2;
            }
            else if(funcs < 501){
                 efetivos = 2;
                suplentes = 2;
             }
            else if(funcs < 1001){
                efetivos = 2;
                suplentes = 2;
            }
            else if(funcs < 2501){
                efetivos = 3;
                suplentes = 3;
            }
            else if(funcs < 5001){
                efetivos = 5;
                suplentes = 4;
            }
            else if(funcs > 5000){
                efetivos = 6;
                 suplentes = 4;
            }
            break;
          

         case 'C-5':
                if(funcs < 30){
                    efetivos = 1;
                    suplentes = 1;
                }
                else if(funcs < 51){
                    efetivos = 1;
                    suplentes = 1;
                }
                 else if(funcs < 81){
                    efetivos = 2;
                     suplentes = 2;
                }
                else if(funcs < 101){
                    efetivos = 3;
                    suplentes = 3;
                }
                else if(funcs < 121){
                    efetivos = 4;
                    suplentes = 3;
                }
                else if(funcs < 141){
                     efetivos = 4;
                    suplentes = 3;
                }
                else if(funcs < 301){
                    efetivos = 4;
                    suplentes = 4;
                }
                else if(funcs < 501){
                     efetivos = 5;
                    suplentes = 4;
                 }
                else if(funcs < 1001){
                    efetivos = 6;
                    suplentes = 5;
                }
                else if(funcs < 2501){
                    efetivos = 9;
                    suplentes = 7;
                }
                else if(funcs < 5001){
                    efetivos = 9;
                    suplentes = 7;
                }
                else if(funcs > 5000){
                    efetivos = 11;
                     suplentes = 9;
                }
                break;
          
              
    

        case 'C-5a':
                    if(funcs < 30){
                        efetivos = 0;
                        suplentes = 0;
                    }
                    else if(funcs < 51){
                        efetivos = 0;
                        suplentes = 0;
                    }
                     else if(funcs < 81){
                        efetivos = 1;
                         suplentes = 1;
                    }
                    else if(funcs < 101){
                        efetivos = 1;
                        suplentes = 1;
                    }
                    else if(funcs < 121){
                        efetivos = 2;
                        suplentes = 2;
                    }
                    else if(funcs < 141){
                         efetivos = 2;
                        suplentes = 2;
                    }
                    else if(funcs < 301){
                        efetivos = 2;
                        suplentes = 2;
                    }
                    else if(funcs < 501){
                         efetivos = 3;
                        suplentes = 3;
                     }
                    else if(funcs < 1001){
                        efetivos = 3;
                        suplentes = 3;
                    }
                    else if(funcs < 2501){
                        efetivos = 4;
                        suplentes = 3;
                    }
                    else if(funcs < 5001){
                        efetivos = 6;
                        suplentes = 4;
                    }
                    else if(funcs > 5000){
                        efetivos = 7;
                         suplentes = 5;
                    }
                    break;
               
        

        case 'C-6':
                        if(funcs < 30){
                            efetivos = 1;
                            suplentes = 1;
                        }
                        else if(funcs < 51){
                            efetivos = 1;
                            suplentes = 1;
                        }
                         else if(funcs < 81){
                            efetivos = 2;
                             suplentes = 2;
                        }
                        else if(funcs < 101){
                            efetivos = 3;
                            suplentes = 3;
                        }
                        else if(funcs < 121){
                            efetivos = 3;
                            suplentes = 3;
                        }
                        else if(funcs < 141){
                             efetivos = 4;
                            suplentes = 3;
                        }
                        else if(funcs < 301){
                            efetivos = 5;
                            suplentes = 4;
                        }
                        else if(funcs < 501){
                             efetivos = 5;
                            suplentes = 4;
                         }
                        else if(funcs < 1001){
                            efetivos = 6;
                            suplentes = 4;
                        }
                        else if(funcs < 2501){
                            efetivos = 8;
                            suplentes = 6;
                        }
                        else if(funcs < 5001){
                            efetivos = 10;
                            suplentes = 8;
                        }
                        else if(funcs > 5000){
                            efetivos = 12;
                             suplentes = 10;
                            
                        }
                        break;
                     
                      

          case 'C-7':
                            if(funcs < 30){
                                efetivos = 0;
                                suplentes = 0;
                            }
                            else if(funcs < 51){
                                efetivos = 0;
                                suplentes = 0;
                            }
                             else if(funcs < 81){
                                efetivos = 1;
                                 suplentes = 1;
                            }
                            else if(funcs < 101){
                                efetivos = 1;
                                suplentes = 1;
                            }
                            else if(funcs < 121){
                                efetivos = 2;
                                suplentes = 2;
                            }
                            else if(funcs < 141){
                                 efetivos = 2;
                                suplentes = 2;
                            }
                            else if(funcs < 301){
                                efetivos = 2;
                                suplentes = 2;
                            }
                            else if(funcs < 501){
                                 efetivos = 2;
                                suplentes = 2;
                             }
                            else if(funcs < 1001){
                                efetivos = 3;
                                suplentes = 3;
                            }
                            else if(funcs < 2501){
                                efetivos = 4;
                                suplentes = 3;
                            }
                            else if(funcs < 5001){
                                efetivos = 5;
                                suplentes = 4;
                            }
                            else if(funcs > 5000){
                                efetivos = 6;
                                 suplentes = 4;
                            }
                            break;
                        
                          

        case 'C-7a':

                            if(funcs < 30){
                                    efetivos = 1;
                                    suplentes = 1;
                                }
                                else if(funcs < 51){
                                  efetivos = 1;
                                  suplentes = 1;
                                }
                                else if(funcs < 81){
                                  efetivos = 2;
                                  suplentes = 2;
                                }
                                else if(funcs < 101){
                                  efetivos = 2;
                                  suplentes = 2;
                                }
                                else if(funcs < 121){
                                  efetivos = 3;
                                  suplentes = 3;
                                }
                                else if(funcs < 141){
                                  efetivos = 3;
                                  suplentes = 3;
                                }
                                else if(funcs < 301){
                                  efetivos = 4;
                                  suplentes = 3;
                                }
                                else if(funcs < 501){
                                  efetivos = 5;
                                  suplentes = 4;
                                }
                                else if(funcs < 1001){
                                  efetivos = 6;
                                  suplentes = 5;
                                }
                                else if(funcs < 2501){
                                  efetivos = 8;
                                  suplentes = 7;
                                }
                                else if(funcs < 5001){
                                  efetivos = 9;
                                  suplentes = 8;
                                }
                                else if(funcs > 5000){
                                  efetivos = 10;
                                  suplentes = 8;
                                }
                                break;
                               

              
        case 'C-8':

          if(funcs < 30){
                  efetivos = 1;
                  suplentes = 1;
              }
              else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 81){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 101){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 121){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 5;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 6;
                suplentes = 4;
              }
              else if(funcs < 2501){
                efetivos = 7;
                suplentes = 5;
              }
              else if(funcs < 5001){
                efetivos = 8;
                suplentes = 6;
              }
              else if(funcs > 5000){
                efetivos = 10;
                suplentes = 8;
              }
              break;


        case 'C-9':

                if(funcs < 30){
                        efetivos = 0;
                        suplentes = 0;
                    }
                    else if(funcs < 51){
                      efetivos = 0;
                      suplentes = 0;
                    }
                    else if(funcs < 81){
                      efetivos = 1;
                      suplentes = 1;
                    }
                    else if(funcs < 101){
                      efetivos = 1;
                      suplentes = 1;
                    }
                    else if(funcs < 121){
                      efetivos = 1;
                      suplentes = 1;
                    }
                    else if(funcs < 141){
                      efetivos = 2;
                      suplentes = 2;
                    }
                    else if(funcs < 301){
                      efetivos = 2;
                      suplentes = 2;
                    }
                    else if(funcs < 501){
                      efetivos = 2;
                      suplentes = 2;
                    }
                    else if(funcs < 1001){
                      efetivos = 3;
                      suplentes = 3;
                    }
                    else if(funcs < 2501){
                      efetivos = 5;
                      suplentes = 4;
                    }
                    else if(funcs < 5001){
                      efetivos = 6;
                      suplentes = 4;
                    }
                    else if(funcs > 5000){
                      efetivos = 7;
                      suplentes = 5;
                    }
                    break;
              
        case 'C-10':

          if(funcs < 30){
                  efetivos = 1;
                  suplentes = 1;
              }
              else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 81){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 101){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 121){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 4;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 5;
                suplentes = 4;
              }
              else if(funcs < 2501){
                efetivos = 8;
                suplentes = 6;
              }
              else if(funcs < 5001){
                efetivos = 9;
                suplentes = 7;
              }
              else if(funcs > 5000){
                efetivos = 10;
                suplentes = 8;
              }
              break;

        case 'C-11':

          if(funcs < 30){
                  efetivos = 1;
                  suplentes = 1;
              }
              else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 81){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 101){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 121){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 5;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 6;
                suplentes = 4;
              }
              else if(funcs < 2501){
                efetivos = 9;
                suplentes = 7;
              }
              else if(funcs < 5001){
                efetivos = 10;
                suplentes = 8;
              }
              else if(funcs > 5000){
                efetivos = 12;
                suplentes = 10;
              }
              break;

        case 'C-12':

          if(funcs < 30){
                  efetivos = 1;
                  suplentes = 1;
              }
              else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 81){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 101){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 121){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 5;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 7;
                suplentes = 6;
              }
              else if(funcs < 2501){
                efetivos = 8;
                suplentes = 6;
              }
              else if(funcs < 5001){
                efetivos = 9;
                suplentes = 7;
              }
              else if(funcs > 5000){
                efetivos = 10;
                suplentes = 8;
              }
              break;

        case 'C-13':

          if(funcs < 30){
                  efetivos = 1;
                  suplentes = 1;
              }
              else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 81){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 101){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 121){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 5;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 6;
                suplentes = 5;
              }
              else if(funcs < 2501){
                efetivos = 9;
                suplentes = 7;
              }
              else if(funcs < 5001){
                efetivos = 11;
                suplentes = 8;
              }
              else if(funcs > 5000){
                efetivos = 13;
                suplentes = 10;
              }
              break;

        case 'C-14':

          if(funcs < 30){
                  efetivos = 1;
                  suplentes = 1;
              }
              else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 81){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 101){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 121){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 4;
              }
              else if(funcs < 501){
                efetivos = 5;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 6;
                suplentes = 5;
              }
              else if(funcs < 2501){
                efetivos = 9;
                suplentes = 7;
              }
              else if(funcs < 5001){
                efetivos = 11;
                suplentes = 9;
              }
              else if(funcs > 5000){
                efetivos = 11;
                suplentes = 9;
              }
              break;


        case 'C-14a':

          if(funcs < 30){
                  efetivos = 0;
                  suplentes = 0;
              }
              else if(funcs < 51){
                efetivos = 0;
                suplentes = 0;
              }
              else if(funcs < 81){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 101){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 121){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 141){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 301){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 501){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 1001){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 2501){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 5001){
                efetivos = 5;
                suplentes = 4;
              }
              else if(funcs > 5000){
                efetivos = 6;
                suplentes = 4;
              }
              break;

        case 'C-15':

          if(funcs < 30){
                  efetivos = 1;
                  suplentes = 1;
              }
              else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 81){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 101){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 121){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 5;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 6;
                suplentes = 4;
              }
              else if(funcs < 2501){
                efetivos = 8;
                suplentes = 6;
              }
              else if(funcs < 5001){
                efetivos = 10;
                suplentes = 8;
              }
              else if(funcs > 5000){
                efetivos = 12;
                suplentes = 10;
              }
              break;


        case 'C-16':

          if(funcs < 30){
                  efetivos = 1;
                  suplentes = 1;
              }
              else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 81){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 101){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 121){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 5;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 6;
                suplentes = 4;
              }
              else if(funcs < 2501){
                efetivos = 8;
                suplentes = 6;
              }
              else if(funcs < 5001){
                efetivos = 10;
                suplentes = 7;
              }
              else if(funcs > 5000){
                efetivos = 12;
                suplentes = 9;
              }
              break;

        case 'C-17':

          if(funcs < 30){
                  efetivos = 1;
                  suplentes = 1;
              }
              else if(funcs < 51){
                efetivos = 1;
                suplentes = 1;
              }
              else if(funcs < 81){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 101){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 121){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 4;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 6;
                suplentes = 5;
              }
              else if(funcs < 2501){
                efetivos = 8;
                suplentes = 7;
              }
              else if(funcs < 5001){
                efetivos = 10;
                suplentes = 8;
              }
              else if(funcs > 5000){
                efetivos = 12;
                suplentes = 10;
              }
              break;

        case 'C-18':

          if(funcs < 30){
                  efetivos = 0;
                  suplentes = 0;
              }
              else if(funcs < 51){
                efetivos = 0;
                suplentes = 0;
              }
              else if(funcs < 81){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 101){
                efetivos = 2;
                suplentes = 2;
              }
              else if(funcs < 121){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 4;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 6;
                suplentes = 5;
              }
              else if(funcs < 2501){
                efetivos = 8;
                suplentes = 7;
              }
              else if(funcs < 5001){
                efetivos = 10;
                suplentes = 8;
              }
              else if(funcs > 5000){
                efetivos = 12;
                suplentes = 10;
              }
              break;

        case 'C-18a':

          if(funcs < 30){
                  efetivos = 0;
                  suplentes = 0;
              }
              else if(funcs < 51){
                efetivos = 0;
                suplentes = 0;
              }
              else if(funcs < 81){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 101){
                efetivos = 3;
                suplentes = 3;
              }
              else if(funcs < 121){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 141){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 301){
                efetivos = 4;
                suplentes = 3;
              }
              else if(funcs < 501){
                efetivos = 4;
                suplentes = 4;
              }
              else if(funcs < 1001){
                efetivos = 6;
                suplentes = 5;
              }
              else if(funcs < 2501){
                efetivos = 9;
                suplentes = 7;
              }
              else if(funcs < 5001){
                efetivos = 12;
                suplentes = 9;
              }
              else if(funcs > 5000){
                efetivos = 15;
                suplentes = 12;
              }
              break;

        case 'C-19':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 101){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 121){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 141){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 301){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 501){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 1001){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 2501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs > 5000){
              efetivos = 6;
              suplentes = 4;
            }
            break;

        case 'C-20':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 81){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 101){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 121){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 141){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 301){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 1001){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs < 2501){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs < 5001){
              efetivos = 6;
              suplentes = 5;
            }
            else if(funcs > 5000){
              efetivos = 8;
              suplentes = 6;
            }
            break;
              
        case 'C-21':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 101){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 121){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 141){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 301){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 501){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 1001){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 2501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs > 5000){
              efetivos = 6;
              suplentes = 5;
            }
            break;


        case 'C-22':

              if(funcs < 30){
                efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 51){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 81){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 101){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 121){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 141){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 301){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 1001){
              efetivos = 6;
              suplentes = 5;
            }
            else if(funcs < 2501){
              efetivos = 8;
              suplentes = 6;
            }
            else if(funcs < 5001){
              efetivos = 10;
              suplentes = 8;
            }
            else if(funcs > 5000){
              efetivos = 12;
              suplentes = 9;
            }
            break;
              
        case 'C-23':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 101){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 121){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 141){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 301){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 501){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 1001){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 2501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs > 5000){
              efetivos = 6;
              suplentes = 5;
            }
            break;

        case 'C-24':

              if(funcs < 30){
                efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 51){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 81){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 101){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 121){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 141){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 301){
              efetivos = 4;
              suplentes = 4;
            }
            else if(funcs < 501){
              efetivos = 4;
              suplentes = 4;
            }
            else if(funcs < 1001){
              efetivos = 6;
              suplentes = 5;
            }
            else if(funcs < 2501){
              efetivos = 8;
              suplentes = 7;
            }
            else if(funcs < 5001){
              efetivos = 10;
              suplentes = 8;
            }
            else if(funcs > 5000){
              efetivos = 12;
              suplentes = 10;
            }
            break;
              
        case 'C-24a':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 101){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 121){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 141){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 301){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 501){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 1001){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 2501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs > 5000){
              efetivos = 6;
              suplentes = 4;
            }
            break;


        case 'C-24b':

              if(funcs < 30){
                efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 51){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 81){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 101){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 121){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 141){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 301){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 1001){
              efetivos = 6;
              suplentes = 4;
            }
            else if(funcs < 2501){
              efetivos = 9;
              suplentes = 7;
            }
            else if(funcs < 5001){
              efetivos = 12;
              suplentes = 9;
            }
            else if(funcs > 5000){
              efetivos = 15;
              suplentes = 12;
            }
            break;
              
        case 'C-25':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 101){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 121){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 141){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 301){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 501){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 1001){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 2501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs > 5000){
              efetivos = 6;
              suplentes = 5;
            }
            break;
          
        case 'C-26':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 101){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 121){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 141){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 301){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 501){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 1001){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 2501){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs > 5000){
              efetivos = 5;
              suplentes = 4;
            }
            break;

        case 'C-27':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 101){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 121){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 141){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 301){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 501){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 1001){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 2501){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs < 5001){
              efetivos = 6;
              suplentes = 5;
            }
            else if(funcs > 5000){
              efetivos = 6;
              suplentes = 5;
            }
            break;

        case 'C-28':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 101){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 121){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 141){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 301){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 501){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 1001){
              efetivos = 4;
              suplentes = 4;
            }
            else if(funcs < 2501){
              efetivos = 5;
              suplentes = 5;
            }
            else if(funcs < 5001){
              efetivos = 6;
              suplentes = 5;
            }
            else if(funcs > 5000){
              efetivos = 6;
              suplentes = 5;
            }
            break;

        case 'C-29':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 101){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 121){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 141){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 301){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 501){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 1001){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 2501){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs > 5000){
              efetivos = 5;
              suplentes = 4;
            }
            break;

        case 'C-30':

              if(funcs < 30){
                efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 51){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 81){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 101){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 121){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 141){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 301){
              efetivos = 4;
              suplentes = 4;
            }
            else if(funcs < 501){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs < 1001){
              efetivos = 7;
              suplentes = 6;
            }
            else if(funcs < 2501){
              efetivos = 8;
              suplentes = 7;
            }
            else if(funcs < 5001){
              efetivos = 9;
              suplentes = 8;
            }
            else if(funcs > 5000){
              efetivos = 10;
              suplentes = 9;
            }
            break;

        case 'C-31':
        case 'C-32':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 101){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 121){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 141){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 301){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 501){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 1001){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 2501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs > 5000){
              efetivos = 6;
              suplentes = 5;
            }
            break;

        // o grupo c-32 não consta porque é o mesmo do c-31

        case 'C-33':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 101){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 121){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 141){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 301){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 501){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 1001){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 2501){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs > 5000){
              efetivos = 5;
              suplentes = 4;
            }
            break;


        case 'C-34':

              if(funcs < 30){
                efetivos = 1;
                suplentes = 1;
            }
            else if(funcs < 51){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 81){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 101){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 121){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 141){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 301){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 501){
              efetivos = 4;
              suplentes = 4;
            }
            else if(funcs < 1001){
              efetivos = 6;
              suplentes = 5;
            }
            else if(funcs < 2501){
              efetivos = 8;
              suplentes = 7;
            }
            else if(funcs < 5001){
              efetivos = 10;
              suplentes = 8;
            }
            else if(funcs > 5000){
              efetivos = 12;
              suplentes = 9;
            }
            break;

        case 'C-35':

              if(funcs < 30){
                efetivos = 0;
                suplentes = 0;
            }
            else if(funcs < 51){
              efetivos = 0;
              suplentes = 0;
            }
            else if(funcs < 81){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 101){
              efetivos = 1;
              suplentes = 1;
            }
            else if(funcs < 121){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 141){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 301){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 501){
              efetivos = 2;
              suplentes = 2;
            }
            else if(funcs < 1001){
              efetivos = 3;
              suplentes = 3;
            }
            else if(funcs < 2501){
              efetivos = 4;
              suplentes = 3;
            }
            else if(funcs < 5001){
              efetivos = 5;
              suplentes = 4;
            }
            else if(funcs > 5000){
              efetivos = 6;
              suplentes = 5;
            }
            break;
            //44 grupos!!!

        
    }


            if(funcs > 10000){
            var membros = repeticoes(grupo, funcs); 
                                    
                // console.log(membros);
                efetivos += membros[0];
                suplentes += membros[1];

               
            }

            
            let tipoMembros = typeof membros
            if(tipoMembros === 'undefined'){
              membros = [0, 0];
            }
        totalMembros = (efetivos + suplentes) * 2
      

       div.innerHTML += `<p class="bold">Representantes dos empregados:</p> 
       <p>${efetivos} membros efetivos</p>
       <p>${suplentes} membros suplentes</p>
       <p class="bold">Representantes do empregador:</p> 
       <p>${efetivos} membros efetivos</p>
       <p>${suplentes} membros suplentes</p>
       <p class="bold">Somando ${totalMembros} membros no total</p> 
       ` 
}

 
function EsconderMostrar(id){
  let divResultado = document.getElementById('resultado')
  let form = document.getElementById('form')
  let resElements = document.getElementById('res')
  let btnVoltar = document.getElementById('voltar')
  let funcs = Number(document.getElementById('funcs').value) 
  let grupo = document.getElementById('grupo')
  let grupoOption = grupo.options[grupo.selectedIndex].value

  if(id == 'calcular' ){
     
      
      if(funcs < 0 || grupoOption == "" || funcs == ""){
      alert("Valores inseridos são inválidos")
   }
   else{    
   divResultado.style.display = 'block'
   form.style.display = 'none'
   btnVoltar.style.display = 'block'
   
   resElements.innerHTML = ""
   
   dimensionaCipa(grupoOption, funcs, resElements)
  }
  
   

  }
  else if(id == 'voltar'){
      
      divResultado.style.display = 'none'
      form.style.display = 'block'
      btnVoltar.style.display = 'none'
  }
  
}


