/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let StringLength = s.length;
    for (let i = 0; i < StringLength / 2; i++) {
        let temp = s[i];
        s[i] = s[StringLength - 1 - i];
        s[StringLength - 1 - i] = temp;
    }
    return s;
};


console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

// 直接用数组的reverse方法就可以倒置数组排序，反转字符串
var reverseStringBest = function (s) {
    return s.reverse()
};