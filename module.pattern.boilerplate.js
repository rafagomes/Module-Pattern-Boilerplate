window.MAINNAMESPACE = window.MAINNAMESPACE || {};
MAINNAMESPACE.SUBNAMESPACE = MAINNAMESPACE.SUBNAMESPACEUI || {}; //you can put something like PROJECT.UTIL

/*
 In this example I'm protecting the $ of Jquery, preventing conflicts.
*/


(function($){
    
    MAINNAMESPACE.SUBNAMESPACE.Module = function(){
        var privateObject; // all objects in this scope are private
        
        var privateMethod = function() { //its better use anonymous methods
            //Here its the method's implementation
        };
        
        return { //all objects inside return are public
            
            publicMethod : function(){
                //Implementation of Public Method
            },
            
            // It's very usual implementing initialization's methods and jqueryBinds for bindObjects like $('object').bind('mouseEvent');
            init: function(){ 
                //Implementation of Initialization Method
            }
        };
    };
    
    $(function(){ //an example of encapsulated instantialization of a Module
        var module = new MAINNAMESPACE.SUBNAMESPACE.Module();
        module.init();
    });
    
    $(function(){ //an example of static instantialization of a Module
        MAINNAMESPACE.SUBNAMESPACE.StaticModule = new MAINNAMESPACE.SUBNAMESPACE.Module();
        MAINNAMESPACE.SUBNAMESPACE.StaticModule.init();
    });
    
}(jQuery));