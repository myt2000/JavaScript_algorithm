/**
 * @param {string[]} operations
 * @return {number}
 */
// 这里用了栈
var calPoints = function (operations) {
    let stack = [];
    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];
        if (op === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else if (op === 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } else if (op === 'C') {
            stack.pop();
        } else {
            stack.push(parseInt(op));
        }
    }
    return stack.reduce((a, b) => a + b, 0);
}


console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1"]));