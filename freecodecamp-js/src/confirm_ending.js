
/* 
    Check if a string (first argument, str) 
    ends with the given target string (second argument, target).
*/
 
//easy solution
function confirmEnding(str, target) { 
    return str.endsWith(target);
}  

// "The Pascal way", solution
function confirmEnding(str, target){
    let count = 0;
    let i = str.length -1;
    let j = target.length -1;

    while( str[i] === target[j] && count < target.length ){
        i--; 
        j--; 
        count++;
    }
    return count === target.length;
}

//one line clever solution 
function confirmEnding(str, target){
    return str.slice(str.length - target.length) === target;
}
let str, target;
str = "He has to give me a new name";
target = "name";
let a = confirmEnding(str, target);