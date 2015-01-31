-module(index).
-compile(export_all).
-include_lib("n2o/include/wf.hrl").

main () -> 
    Body = wf : render ( body () ) , 
    [ #dtl { file =  "login" ,  
                 bindings = [ { body , Body } ] } ].
body () -> 
    [  #span { text  = "Login: " }, 
       #textbox  { id  = user }, 
       #span  {  text  =  "Pass: "  }, 
       #password  {  id  = pass }, 
       #button  {  text  = "Login" } ].
