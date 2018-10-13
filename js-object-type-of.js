(function(global) {
    'use strict';

    Object.typeOf = function(obj) {
        if (obj === global) {
            return 'global';
        }
        return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
    }
})(this);
