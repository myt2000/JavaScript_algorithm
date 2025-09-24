/**
 * @param {number} num
 * @return {boolean}
 */
// 这道题完全没看懂，提到的题目是要判断一个数是否是完美数，而不是完全平方数。完美数是指一个正整数等于除了它自身以外的所有正因子之和的数。

// 所以，我们需要检查给定的正整数 num 是否等于除了它自身以外的所有正因子之和。
var checkPerfectNumber = function (num) {
    if (num === 1) return false;
    let sum = 1;
    const sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum === num;
};

/**
 * 初始化变量 sum 为 1，因为 1 是所有正整数的因子。
 * 从 2 开始遍历到 sqrt(num)，将所有能整除 num 的因子加到 sum 中。
 * 如果 num 不是完全平方数，需要加上 num 自身。
 * 如果 sum 等于 num，则返回 true，否则返回 false。
*/


// 示例用法
console.log(checkPerfectNumber(28)); // 输出 true
console.log(checkPerfectNumber(7)); // 输出 false