/**
 * @param {string} 
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && map[s[i]] < map[s[i + 1]]) {
            console.log("i+1: " + map[s[i + 1]] + ",  i:" + map[s[i]])
            result += map[s[i + 1]] - map[s[i]];
            i++;
        } else {
            result += map[s[i]]
        }
    }
    return result
};


// 测试用例
console.log(romanToInt("MCMXCIV")); // 输出：1994
console.log(romanToInt("XII")); // 输出：12
console.log(romanToInt("XXVII")); // 输出：27
console.log(romanToInt("IV")); // 输出：4
console.log(romanToInt("IX")); // 输出：9
console.log(romanToInt("XL")); // 输出：40
console.log(romanToInt("XC")); // 输出：90
console.log(romanToInt("CD")); // 输出：400
console.log(romanToInt("CM")); // 输出：900