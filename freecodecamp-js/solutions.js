//convert celsius to Fahrenheit
var a;

function convertToF(celsius) {
    return celsius * 9/5 + 32;
}
  convertToF(30);

//Reverse the provided string.
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


//exercise 3  
function factorialize(num) {
    if(num == 0) return 1;
    return factorialize(num-1) * num;
}

function factorialize(num){
    let fact = 1;
    for(let j=2; j<=num; j++ ){
        fact = fact * j;
    }
    return fact;
}

//with memoization
let memoize = (fun) =>{
    let memo = {}; //defined a memo obj
    
    //first class function
    return (...args) => {
        let n = args[0];
        let res;
        if ( n in memo ){ res = memo[n]; }
        res = fun(n); //save the function scope 
        memo[n] = res;
        return res;
    }
}

//memoization and ES6
factorialize = memoize(
    (num) => {
        if (num == 0)
            return 1;
        return num * factorialize(num - 1);
    }
);

//Return the length of the longest word in the provided sentence.
//functional solution
function findLongestWordLength(str) {
    let max = 0;
    str = str.split(' ');
    str.forEach((x) => {
        if(x.length >= max){
            max = x.length;
        }
    });
    return max;
  }
  
//naive solution with for loop
function findLongestWordLength(str) {
    str = str.split(' ');
    let max = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].length >= max){
            max = str[i].length;
        }
    }
    return max;
}
//a = findLongestWordLength("The quick brown fox jumped over the lazy dog");


//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.


function largestOfFour(arr) {
 /*
    let large = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if            
    }
    return arr;
*/  
}
  
  a = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


console.log(a);