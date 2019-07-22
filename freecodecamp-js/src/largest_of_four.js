
//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.

//naive way
function largestOfFour(arr) {
    let res = [];
    for(let i = 0; i< arr.length; i++){
        let largest = arr[i][0];
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] > largest){
                largest = arr[i][j];
            }
        }
        res.push(largest);
    }
    return res;
}

//Elegant solution! 🚀

function largestOfFour(arr){
    return arr.map(x => 
        x.reduce( (acc, x) => Math.max(acc, x) ))
}

const vector = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];
let a = largestOfFour(vector);
