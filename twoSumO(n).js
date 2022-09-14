function twoSum(arr,target) {
    let obj = {};
    for (let i = 0;i < arr.length;i++) {
        let num = arr[i];
        let rest = target - num;
        if (rest in obj) return [obj[rest], i ]
        else obj[num] = i;
    }
}

console.log(twoSum([3,2,4,4,7,2,4,12,5],9));