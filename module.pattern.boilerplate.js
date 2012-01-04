window.MAINNAMESPACE = window.MAINNAMESPACE || {};
MAINNAMESPACE.SUBNAMESPACE = MAINNAMESPACE.SUBNAMESPACEUI || {}; //you can put something like PROJECT.UTIL

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
            
            init: function(){ // It's commom use initializations methods and jqueryBinds for bindObjects
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