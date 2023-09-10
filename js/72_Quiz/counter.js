window.app = window.app || {};


window.app.counter = (function (module){
    'use strict';
    let numb = 0;
    module.increment = () => numb++;
    

    module.getCount = () => numb;
    
    return module;

})(window.app.counter || {});
