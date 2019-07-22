
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

let a = factorialize(5);