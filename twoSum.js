function twoSum(arr,target) {
    let counter=0;
    let arr2 = [];
    for (let i = 0;i<arr.length;i++) {    
        for (let j = i+1;j<arr.length;j++) {
            counter++;
            if (arr[i] + arr[j] === target) {
                arr2.push(i, j);
                console.log(counter)
                return arr2;
            }
        }
    }
}
// n^2 because 2 nested loops 3 bei 3 ; 15 bei 6;  *3
// 6 bei 4, 18 bei 8; *3
// verdopplung von input führt zu *5 bei output
console.log(twoSum([3,2,4,4,7,2,4,12],16));