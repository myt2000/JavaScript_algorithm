/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n)
        // 计算下一个数
        n = sumOfSquare(n.toString());
    }

    return n === 1;

    // 辅助函数：计算数字各位平方和
    function sumOfSquare(numStr) {
        let sum = 0;
        for (let digit of numStr) {
            // Math.pow() 函数返回 x 的 y 次幂。
            sum += Math.pow(parseInt(digit, 10), 2);
        }
        return sum;
    }
};


// 测试示例
console.log(isHappy(19));  // 输出: true
console.log(isHappy(2));   // 输出: false