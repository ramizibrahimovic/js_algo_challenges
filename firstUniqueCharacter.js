function findUnique(string) {
    let hash = {};
    string.split("").forEach(element => (hash[element] ? hash[element]++ : hash[element] = 1));
    return string.split("").indexOf(string.split("").find(element => hash[element] == 1))
}

console.log(findUnique("helelgoho"))