/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let A = 0;
    let L = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            A++;
        }
        if (s[i] === 'L') {
            L++;
        } else {
            L = 0;
        }
        if (A > 1 || L > 2) {
            return false;
        }
    }
    return true;
};


console.log(checkRecord("PPALLP"))
console.log(checkRecord("PPALLL"))