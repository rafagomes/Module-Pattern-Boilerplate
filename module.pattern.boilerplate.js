/*global window, document, jQuery, namespace, mainnamespace*/
window.namespace = window.namespace || {};
mainnamespace.subnamespace = mainnamespace.subnamespace || {}; //you can put something like PROJECT.UTIL

(function (window, document, $) {

    "use strict";

    mainnamespace.subnamespace.Module = function () {
        var privateObject, // all objects in this scope are private

            privateMethod = function () { //its better use anonymous methods
                //Here its the method's implementation
            };

        return { //all objects inside return are public

            publicMethod : function () {
                //Implementation of Public Method
            },

            // It's very usual implementing initialization's methods and jqueryBinds for bindObjects like $('object').bind('mouseEvent');
            init: function () {
                //Implementation of Initialization Method
            }
        };
    };

    $(function () { //an example of encapsulated instantialization of a Module
        var module = new mainnamespace.subnamespace.Module();
        module.init();
    });

}(window, document, jQuery));
