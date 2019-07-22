/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

let a;
function booWho(bool) {
    return typeof bool === 'boolean'
}

a = booWho(true);

/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words 
like "the" and "of".
*/

function titleCase(str) {
    let title = str.toLowerCase().split(' ');//[im,  a, little , .. , ]
    let res = [];
    let newStr = "";

    title.forEach(function(word){
        newStr += word[0].toUpperCase(); 
        newStr += word.slice(1, word.length);
        res.push(newStr);
        newStr = "";
    });
    return res.join(' ');
}

//replace solution
function titleCase(str){
    return str.split(' ').map(word => word.replace(word[0], word[0].toUpperCase() )).join(' ');
}
  
a = titleCase("i'm a little tea pot");
  console.log(a);

/*
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    return arr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  */