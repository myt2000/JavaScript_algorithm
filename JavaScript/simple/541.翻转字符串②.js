/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
        arr.splice(i, 0, ...arr.splice(i, k).reverse());
    }
    return arr.join('');
};



console.log(reverseStr("abcdefg", 2))
console.log(reverseStr("abcd", 2))
console.log(reverseStr("abcdefg", 3))