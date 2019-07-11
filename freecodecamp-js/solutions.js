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

a = factorialize(5);
console.log(a);