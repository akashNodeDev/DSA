
function checkAnagram(str1,str2) {

    if(str1.length != str2.length) {
        return false;
    }

    let counter = {}

    for(let letter of str1) {
        // console.log(letter)
        counter[letter]=(counter[letter] || 0)+1;
       // console.log(counter[letter])
    }

    //console.log(counter);

    for(let item of str2) {
        console.log(counter[item])
        if(!counter[item]){
            return false;
        };
        counter[item]-=1;
    }
    return true;
    
}

const result = checkAnagram('hello','llheo');
console.log("result=",result);

// linear time complexity