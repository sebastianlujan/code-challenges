/*

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
    let res = "";
    if(num > 0){
      for(let i = 1; i<= num; i++){
        res = res + str;
      }
    }  
    return res;
  }


//better procedural version 

function repeatStringNumTimes(str, num) {
    let res = "";
    while(num > 0){
        res += str;
        num --;
    }
    return res;
}

//declarative approach with repeat 
function repeatStringNumTimes(str, num){
    return (num > 0)? str.repeat(num): "";
}


//functional way
function repeatStringNumTimes(str, num){
    
    if(num <= 0){
        return "";
    }else if(num === 1){
        return str;
    }else{
        return str + repeatStringNumTimes(str, num-1);
    }
}

let a = repeatStringNumTimes("*", 3);
console.log(a);
