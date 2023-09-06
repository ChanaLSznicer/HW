
window.myApp = window
window.myApp = (function getMonthUtils(theModule){
    'use strict';
    const months = ['jan', 'feb','march'];

    function getMonth (index){
        return months[index -1];
        }
        
    
    function getMonthIndex (month){
        for(let i = 0; i< months.length; i++){
            if(monhts[i]=== month){
                return i+1;
            }
        }
    }
 
    theModule.getMonth = getMonth;
    theModule.getMonthIndex = getMonthIndex;
}(window.myApp || {}));
