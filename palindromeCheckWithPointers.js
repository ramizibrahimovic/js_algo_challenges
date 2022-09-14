function paliCheck(str) {
    let string = str.toLowerCase().replace(/[^\w]/gi, '');
    let p1 = 0;
    let p2 = string.length -1;
    while (p1++ <= p2--) {
        if (string[p1] != string[p2]) return false;
    }
    return true;
}

console.log(paliCheck("radgdaR"))