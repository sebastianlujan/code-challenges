/* Reverse the provided string. */

//with reverse() function
function reverseString(str) {
    return str.split('').reverse().join('');
}

//naive way 
function reverseString(str){
    let rev = "";
    for(let cursor = str.length-1; cursor >= 0; cursor-- ){
        rev += str[cursor];
    }
    return rev;
}

//es6 functional way
function reverseString(str){
    let rev = "";
    [...str].forEach(e => { rev = e + rev });
    return rev;
}

