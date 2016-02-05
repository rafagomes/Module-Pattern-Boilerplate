/*global window, document, jQuery, namespace, subnamespace*/
window.namespace = window.namespace || {};
namespace.subnamespace = namespace.subnamespace || {};

(function (window, document, $) {
    'use strict';

    namespace.subnamespace.Module = function () {
        var privateObject;

        function privateMethod () {
            
        }

        function publicMethod () {
            
        }
        
        function init () {
            
        }
        
        return {

            publicMethod : publicMethod,

            init: init
        };
    };

    $(function () {
        var module = namespace.subnamespace.Module();
        module.init();
    });

}(window, document, jQuery));
