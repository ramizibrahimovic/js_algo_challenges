function paliCheck(str) {
    str = str.toLowerCase().replace(/[^\w]/gi, '');
    let p1 = 0;
    let p2 = str.length -1;
    while (p1++ <= p2--) {
        if (str[p1] != str[p2]) return false;
    }
    return true;
}

console.log(paliCheck("radgdaR"))