
/*
Truncate a string (first argument) 
if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

//naive procedural way -> the pascal way
function truncateString(str, num) {
    let res = "";
    if(str.length <= num){
        res = str;
    } else {
        for(let i = 0; i<num; i++){
            res += str[i];
        }
    res += "..."
    }
    return res;
}

//less naive code, using slice, or substring

/*
function truncateString(str, num){
    if( str.length <= num ){
        return str;
    } else {
        let entryPoint = num > 3 ? num - 3 : num;
        return str.slice(0,  entryPoint) + "...";
    }
}
*/

//recursive way, for the joy of recursion

  let a = truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(a);