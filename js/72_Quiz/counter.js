window.app = window.app || {};


window.app.counter = (function (module){
    'use strict';
    let numb = 0;
    module.increment = () => numb++;


    module.getCount = () => numb;

    return module;

})(window.app.counter || {});

// SL - not a problem but this example didnt need the sophistication of allowing for object to already exist and adding to it. We dont plan on adding to window.app.counter from another file so could have just created and returned an object
