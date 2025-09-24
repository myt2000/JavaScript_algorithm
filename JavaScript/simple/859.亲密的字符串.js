/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

/**
 * 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。

    交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。

    例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
*/
var buddyStrings = function (s, goal) {
    // 检查长度是否相同
    if (s.length !== goal.length) return false;
    // 如果 s 和 goal 完全相同，检查 s 中是否有重复字符
    if (s === goal) {
        let charSet = new Set();
        for (let char of s) {
            if (charSet.has(char)) return true;
            charSet.add(char);
        }
        return false;
    }

    // 记录不同的位置和字符
    let diff = [];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== goal[i]) {
            diff.push([s[i], goal[i]]);
            // 如果超过两个位置不同，则无法通过一次交换变得相同
            if (diff.length > 2) return false;
        }
    }

    // 检查是否正好有两个位置不同，且可以交换
    return diff.length === 2 && diff[0][0] === diff[1][1] && diff[0][1] === diff[1][0];
};

// 测试用例
console.log(buddyStrings("ab", "ba")); // true
console.log(buddyStrings("ab", "ab")); // false - 因为没有可交换的不同字符
console.log(buddyStrings("aa", "aa")); // true - 因为有重复字符可以交换
console.log(buddyStrings("abc", "bca")); // false - 需要多于一次交换
