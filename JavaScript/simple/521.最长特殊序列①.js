/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

/**
 * 这道题目要求找出两个字符串中的最长特殊序列的长度。特殊序列的定义是某字符串独有的最长子序列（即不能是其他字符串的子序列）。
 * 具体来说，如果字符串 a 与字符串 b 不相等，则较长的字符串就是最长特殊序列，其长度即为该字符串的长度。如果字符串 a 与字符串 b 相等，则它们不存在特殊序列，返回 -1。
 * 因此，题目需要根据给定的两个字符串 a 和 b，判断它们之间的关系，然后返回相应的结果。
*/

var findLUSlength = function (a, b) {
    if (a === b) {
        return -1;
    } else {
        return Math.max(a.length, b.length);
    }
};

// 示例用法
console.log(findLUSlength("aba", "cdc")); // 输出 3
console.log(findLUSlength("aaa", "bbb")); // 输出 3
console.log(findLUSlength("aaa", "aaa")); // 输出 -1


var findLUSlengthBest = function (a, b) {
    return a !== b ? Math.max(a.length, b.length) : -1;
};