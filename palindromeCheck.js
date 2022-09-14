function paliCheck(string) {
    return (string.replace(/[^\w]/gi, '').toLowerCase() == string.replace(/[^\w]/gi, '').toLowerCase().split("").reverse().join(""));
}

console.log(paliCheck(".rad.ada .R"))