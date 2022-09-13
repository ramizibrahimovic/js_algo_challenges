function groupAna(array) {
    let obj = {}; //time: 1, space: n da alle unique sein können
    for (let word of array) { //time: n, space = 1
        let sort = word.split("").sort().join(""); //time: n log n da sort das ist, space = 1
        obj[sort] ? obj[sort].push(word) : obj[sort] = [word]; // time: 1, space: 1
    };
    return Object.values(obj);
}
// time: n (m log m) wobei n länge von array ist und m die länge des längsten wertes in array
console.log(groupAna(["hello","there","olleh"]));