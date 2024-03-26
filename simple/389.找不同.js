/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// 异或运算
function findTheDifference(s, t) {
    let result = 0;

    // 将字符串 s 和 t 中所有字符进行异或运算
    for (let char of s) {
        result ^= char.charCodeAt(0);
    }

    for (let char of t) {
        result ^= char.charCodeAt(0);
    }

    // 将结果对应的 ASCII 码值转换为字符并返回
    return String.fromCharCode(result);
}

// 示例测试
console.log(findTheDifference("abcd", "abcde")); // 输出："e"
console.log(findTheDifference("", "y")); // 输出："y"

/**
 * 异或运算是一种位运算，其特点是：对应位相同为0，不同为1。在这个问题中，我们将字符串 s 和 t 中的所有字符进行异或运算，相同的字符会相互抵消，剩下的就是唯一多出来的字符。
 * 
 * 具体地说，考虑两个相同的字符进行异或运算，结果为0。例如，字符 'a' 的 ASCII 码值为 97，对应的二进制为 01100001，两个相同的字符 'a' 进行异或运算，结果为 01100001 ^ 01100001 = 00000000，即为 0。
 * 
 * 而对于多出来的字符，由于在字符串 s 和 t 中只出现了一次，它们会留下来，并且不会被其他字符抵消。
*/


var findTheDifferenceBest = function (s, t) {
    return String.fromCharCode(`${s}${t}`.split('').reduce((pre, curr) => pre ^ curr.charCodeAt(), 0))
};