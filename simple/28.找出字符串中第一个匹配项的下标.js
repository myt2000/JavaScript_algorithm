/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) {
        return 0;
    }
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle)
            return i;
    }
    return -1;
};

// 示例测试
console.log(strStr("sadbutsad", "sad")); // 输出：0
console.log(strStr("leetcode", "leeto")); // 输出：-1