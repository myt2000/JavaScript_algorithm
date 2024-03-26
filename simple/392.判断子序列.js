/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 双指针实现
var isSubsequence = function (s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
};

// 示例测试
console.log(isSubsequence("abc", "ahbgdc")); // 输出：true
console.log(isSubsequence("axc", "ahbgdc")); // 输出：false

/**
 * 具体做法是，使用两个指针 i 和 j 分别指向字符串 s 和 t 的开头，然后遍历字符串 t。
 * 
 * 在遍历过程中，如果当前字符与指针 i 指向的字符相等，则将指针 i 向后移动一位；
 * 
 * 否则，继续遍历字符串 t。最终，如果指针 i 移动到了字符串 s 的末尾，则说明字符串 s 是字符串 t 的子序列，返回 true；否则，返回 false。
*/