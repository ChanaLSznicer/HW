window.app = window.app || {};

window.app.counter2 = (function (module){
    'use strict';
    let count = 0;
    module.counterTimes = () => count;
    module.createCounter = () =>{
        count++;
        return {
            numb: 0,
            increment:function() {
                this.numb++;
            },
            getCount:function() {
                return this.numb
            }
        }
    }

    return module;
}(window.app.counter2 || {}));

// SL - same comment as previous file
