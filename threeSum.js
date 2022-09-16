function threeSum(arr){
    arr.sort((a,b) => a-b);
    let result = [];
    for (let i = 0;i< arr.length-2;i++) {
        let left = i+1;
        let right = arr.length - 1;
        if (i > 0 && arr[i] === arr[i-1]) continue;
        while (left < right) {
            let total = arr[i]+arr[left]+arr[right];
            if (total === 0) {
                result.push([arr[i],arr[left],arr[right]]);
                while (left < right && arr[right] === arr[right -1]) {
                    right--;
                }
                while (left < right && arr[left] === arr[left + 1]) {
                    left++;
                }
                right--;
                left++;
            }
            else if (total > 0) {
                right--;
            }
            else {
                left++;
            }
        }
    }
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))