/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。
*/
var backspaceCompare = function (s, t) {
    // 比较两个字符串经过处理后的结果
    return buildString(s) === buildString(t);
};


var buildString = function (str) {
    // 模拟退格操作
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '#') {
            stack.push(str[i]);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
}

// 测试用例
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false