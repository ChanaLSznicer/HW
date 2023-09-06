window.myApp = window.myApp || {};

window.myApp.utils = (function(theModule){
    function caseInsensitiveCompare(a,b){
        return a.toLowerCase()=== b.toLowerCase();
        }
    theModule.caseInsensitiveCompare = caseInsensitiveCompare;
    return theModule;
}(window.myApp.utils || {}));