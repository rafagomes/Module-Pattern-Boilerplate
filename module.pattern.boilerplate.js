/*global window, document, jQuery, namespace, subnamespace*/
window.namespace = window.namespace || {};
namespace.subnamespace = namespace.subnamespace || {};

(function (window, document, $) {

    "use strict";

    namespace.subnamespace.Module = function () {
        var privateObject,

            privateMethod = function () {
                
            };

        return {

            publicMethod : function () {
                
            },

            init: function () {
                
            }
        };
    };

    $(function () {
        var module = new namespace.subnamespace.Module();
        module.init();
    });

}(window, document, jQuery));
