(function(){
   'use strict';


    for(let i = 0;i <10; i++){

        window.app.counter.increment();
    }


    const count1 = window.app.counter2.createCounter();
    for(let i = 0;i <5; i++){

        count1.increment();
    }


    const count2 = window.app.counter2.createCounter();
    for(let i = 0;i <15; i++){

        count2.increment();
    }


    console.log(window.app.counter.getCount());
    console.log(count1.getCount());
    console.log(count2.getCount());
})();

// SL- nice
// Grade - 100
