/*
Create a function that looks through an array (first argument) 
and returns the first element in the array that passes a truth test (second argument). 
If no element passes the test, return undefined.
*/


//pascal way
function findElement(arr, func) {
    let x = 0;
    while(x < arr.length && !func(arr[x]))
        x++;
    
    return (x != arr.length)? arr[x] : undefined;
}

//with for loop
function findElement(arr, func) {
    let res = 0;
    for (let num in arr) {
        if(func(num)){
            res = num;
            return res;
        }
    }
    return res = undefined;
}
//functional way

  
let a =findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(a);