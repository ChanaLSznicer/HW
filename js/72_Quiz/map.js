(function(){

    'use strict';

    const numbs = [6,10,12];


    function multiply (numb){
        return numb * 2;

    }

    function ourMap(theArray, callbackFn) {
        const newArray = [];

        theArray.forEach(elem => newArray.push(callbackFn(elem)));

        return newArray;



    }
    const a =  ourMap(numbs, a => a * 6);
    console.log(a);
    console.log(numbs);
})();

// SL - nice!
