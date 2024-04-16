/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * 初始化两个指针 left 和 right，分别指向字符串的首尾。
 * 使用 while 循环遍历字符串，当 left 小于 right 时执行循环体：
 * 检查 s[left] 和 s[right] 是否相等，如果不相等，则说明当前字符对不是回文的一部分。
 * 在这种情况下，我们需要尝试两种可能的删除策略：删除左侧字符或右侧字符，并分别调用内部辅助函数 isPalindrome(s, left + 1, right) 和 isPalindrome(s, left, right - 1) 来检查剩下的子串是否为回文串。如果其中任何一个返回 true，则表示原字符串在删除一个字符后可变为回文串，因此返回 true。
 * 如果 s[left] 和 s[right] 相等，则将左右指针向中间移动，继续检查下一个字符对。
 * 当 left 不再小于 right，即所有字符对都已检查完毕且没有发现不相等的情况，说明原字符串本身就是回文串，因此返回 true。
*/
var validPalindrome = function (s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;

    function isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};


// console.log(validPalindrome("aba"))
console.log(validPalindrome("abca"))
// console.log(validPalindrome("abc"))