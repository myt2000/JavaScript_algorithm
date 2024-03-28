/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const charCount = {};  // 用于统计每个字符出现的次数
    let maxLength = 0;
    let hasOdd = false; // 标记是否存在出现奇数次的字符

    // 统计每个字符出现的次数
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // 遍历统计结果，计算回文长度
    for (let count of Object.values(charCount)) {
        maxLength += Math.floor(count / 2) * 2; // 取偶数次字符
        if (count % 2 === 1) {
            hasOdd = true; // 如果出现奇数次的字符，标记为 true
        }
    }
    // 如果存在出现奇数次的字符，最终回文串长度加1
    if (hasOdd) {
        maxLength++;
    }
    return maxLength;
};

// 示例
// console.log(longestPalindrome("abccccdd")); // 输出: 7
// console.log(longestPalindrome("a")); // 输出: 1
// console.log(longestPalindrome("aaaaaccc")); // 输出: 7


var longestPalindromeBest = function (s) {
    const map = new Map()
    let cnt = 0
    for (let i = 0; i < s.length; i++) {
        if (map.delete(s[i])) {
            cnt += 2
        } else {
            map.set(s[i])
        }
    }
    return cnt + Number(map.size > 0)
};

console.log(longestPalindromeBest("abccccdd")); // 输出: 7
console.log(longestPalindromeBest("a")); // 输出: 1
console.log(longestPalindromeBest("aaaaaccc")); // 输出: 7