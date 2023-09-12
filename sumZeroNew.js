// Linear time complexity
let arr = [-5,-4,-3,-2,-1,0,1,2,3,4,6,8];

function findSumZeroPair(data) {
    let leftPointer = 0;
    let rightPointer = data.length-1;
    for(let i=0;i<data.length;i++) {
        let sum= data[leftPointer]+data[rightPointer];
        // console.log("LeftPointer=",data[leftPointer]);
        // console.log("rightPointer=",data[rightPointer]);
        if(sum > 0) {
            rightPointer--;
        } else if(sum<0) {
            leftPointer++;
        } else {
            return [data[leftPointer],data[rightPointer]];
        }
    }
}

let result = findSumZeroPair(arr);
console.log(result);

