/**
 * @param {string} s
 * @return {string}
 */
// 使用双指针技巧
var reverseVowels = function (s) {
    let chars = s.split('');
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0, right = chars.length - 1;

    while (left < right) {
        // 如果左指针指向的字符是元音字母
        if (vowels.has(chars[left])) {
            // 如果右指针指向的字符也是元音字母，则交换两个字符
            if (vowels.has(chars[right])) {
                let temp = chars[left];
                chars[left] = chars[right];
                chars[right] = temp;
                // 移动左右指针
                left++;
                right--;
            } else {
                right--;
            }
        } else {
            left++;
        }
    }
    return chars.join('');
};


// 示例测试
console.log(reverseVowels("hello")); // 输出："holle"
console.log(reverseVowels("leetcode")); // 输出："leotcede"

