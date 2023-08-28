function ourEvery(theArray, callbackFn){
    for (let i= 0; i<theArray.length; i++){
        if(!callbackFn(theArray[i])) //what does this mean? whats false?
        return false;
    }
    return true;
}
const upper=['A','B','C'];
const lower=['a','b','c'];
const mixed=['A','b','C'];

function isUpper(char){
    return char.toUpperCase() === char;
}
console.log(ourEvery(upper, isUpper));
console.log(ourEvery(lower, isUpper));
console.log(ourEvery(mixed, isUpper));

///////////////////////////
function ourSome(theArray, callbackFn){
    for(let i=0; i<theArray.length; i++){
        if(callbackFn(theArray[i])){
            return true;
        }
    }
    return false;
}
console.log(ourSome(upper, isUpper));
console.log(ourSome(lower, isUpper));
console.log(ourSome(mixed, isUpper));

/////////////////
function onlyIf (theArray,testCallback, actionCallback){
    theArray.forEach(elem => {
        if(testCallback(elem)){
            actionCallback(elem);
        }
    })
}
console.log ('(onlyIf(upper, isUpper, c=> console.log(c));')
onlyIf(upper, isUpper, c=> console.log(c));

console.log ('(onlyIf(lower, isUpper, c=> console.log(c));')
onlyIf(lower, isUpper, c=> console.log(c));

console.log ('(onlyIf(mixed, isUpper, c=> console.log(c));')
onlyIf(mixed, isUpper, c=> console.log(c));





