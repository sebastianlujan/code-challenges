/* Return the length of the longest word in the provided sentence. */

//forEach solution
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

function findLongestWordLength(str){ }

a = findLongestWordLength("The quick brown fox jumped over the lazy dog");
