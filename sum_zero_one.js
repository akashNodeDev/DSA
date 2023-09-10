
const arr = [-5,-4,-3,-2,-1,0,1,2,3,4];

function getSumZero(shortarr){
    arrLen = arr.length;
    //let pair=[];
    for(number of shortarr) {
        for(let j=1;j<arrLen;j++){
            let sum = number+arr[j]
            if(sum===0){
                //pair.push(number,arr[j]);
                return [number,arr[j]];
               
            }
        }
    }
}

const result = getSumZero(arr);
console.log("Result=",result)

//o(n^2) Quadratic Time complexity