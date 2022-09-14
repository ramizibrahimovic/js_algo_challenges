function threeSum(arr){
    arr.sort((a,b) => a-b);
    console.log(arr)
    let result = [];
    for (let i = 0;i< arr.length;i++) {
        num1 = arr[i];
        let j = i+1;
        let k = arr.length - 1;
        while (j < k) {
            console.log(i,j,k);
            console.log(arr[i],arr[j],arr[k])
            if (arr[i]+arr[j]+arr[k] === 0) {
                result.push([arr[i],arr[j],arr[k]]);
            }
            else if (arr[i]+arr[j]+arr[k] < 0) {
                j++
            }
            else {
                k--
            }
            j++;
            console.log(i,j,k)
        }
    }
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))