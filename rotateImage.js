function rotateImage(arr) {
    arr = arr.reverse();
    for (let i = 0;i<arr.length;i++) {
        for (let j = 0;j<i;j++) {
            console.log(i,j)
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
}

console.log(rotateImage([[1,2,3],[4,5,6],[7,8,9]]))