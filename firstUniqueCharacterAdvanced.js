function findUnique(string) {
    let arr = string.split("");
    for (let char of arr) {
        if (arr.indexOf(char) === arr.lastIndexOf(char))
        return arr.indexOf(char);
    };
    return -1;
}

console.log(findUnique("hehefofllo"))