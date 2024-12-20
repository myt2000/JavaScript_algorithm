/**
 * 给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。

 

示例 1：

输入：s = "Hello"
输出："hello"
示例 2：

输入：s = "here"
输出："here"
示例 3：

输入：s = "LOVELY"
输出："lovely"
 

提示：

1 <= s.length <= 100
s 由 ASCII 字符集中的可打印字符组成
*/

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 'A' && arr[i] <= 'Z') {
            arr[i] = String.fromCharCode(arr[i].charCodeAt() + 32);
        }
    }
    return arr.join('');
};
console.log(toLowerCase("Hello"))
console.log(toLowerCase("here"))
console.log(toLowerCase("LOVELY"))


// leetcode最优解
var toLowerCaseBest = function (s) {
    return s.toLowerCase();
};