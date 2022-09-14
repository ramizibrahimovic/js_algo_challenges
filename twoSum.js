function twoSum(arr,target) {
    let arr2 = [];
    for (let i = 0;i<arr.length;i++) {    
        for (let j = i+1;j<arr.length-1;j++) {
            console.log(i,j)
            if (arr[i] + arr[j] === target) {
                arr2.push(i, j);
                return arr2;
            }
        }
        
    }
}

console.log(twoSum([3,2,4],6));