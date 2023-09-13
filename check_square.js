// WAP to check the square of one element is present in another array or not

function checkArray(arr1,arr2) {
    let map1={};
    let map2={};

    for(let item1 of arr1) {
        map1[item1] = (map1[item1] || 0) +1
    }

    for(let item2 of arr2) {
        map2[item2] = (map2[item2] || 0) +1
    }

    for(let key in map1) {
      //  console.log("Key=",key);

        if(!map2[key*key]) {
            return false;
        }

        if(map1[key] !==map2[key*key]) {
            return false;
        }
    }

    return true;

}

const result = checkArray([1,2,3,4,2],[1,4,9,16,4]);

console.log("Result=",result);