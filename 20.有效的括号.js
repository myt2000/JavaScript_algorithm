/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = { ')': '(', ']': '[', '}': '{' }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log(stack)
        if (map[s[i]]) {

            if (!stack.length || stack[stack.length - 1] !== map[s[i]]) {
                console.log("stack: " + stack[stack.length - 1] + ", map[s[i]]: " + map[s[i]])
                return false;
            }
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};


// 测试用例
console.log(isValid("()")); // 输出：true
console.log(isValid("()[]{}")); // 输出：true
console.log(isValid("(]")); // 输出：false