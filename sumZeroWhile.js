let arr = [-5,-4,-3,-2,-1,0,1,2,3,4,6,8];

function findSumNum(arr) {
    let left = 0;
    let right = arr.length;
    while(left<right) {
        let sum = arr[left]+arr[right];
        if(sum === 0) {
            return [arr[left],arr[right]]
        } else if(sum >0) {
            right--;
        } else {
            left++;
        }
    }
}

let result = findSumNum(arr);
console.log("result",result)

//  Time complexity o(n) : Linear Time Complexity