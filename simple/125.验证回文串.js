/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return s === s.split('').reverse().join('');
};
/**
 * /[^a-z0-9]/gi 是一个完整的正则表达式字符串，其中：

/ 开始和结束符号，用于定义正则表达式的边界。
[^a-z0-9] 是匹配字符集的否定形式，表示匹配任何不在指定范围内的字符。
^ 在方括号内时，表示反向选择，即匹配不包含在括号内的任何字符。
[a-z0-9] 表示匹配所有小写字母（a到z）和数字（0到9）。
g 是全局搜索标志，表示要对整个字符串进行搜索并替换所有匹配项，而不仅仅是第一个匹配项。
i 是忽略大小写标志，表示匹配时不区分字母的大小写。
*/

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('0P'));