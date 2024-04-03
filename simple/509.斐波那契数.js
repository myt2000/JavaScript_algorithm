/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//     if (n === 1) return 1;
//     if (n === 0) return 0;
//     return fib(n - 1) + fib(n - 2);
// };

// leetcode最优解
var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const tmp = [0, 1];
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum = tmp[0] + tmp[1];
        tmp[0] = tmp[1];
        tmp[1] = sum;
    }
    return sum;
};

/**
 * 如果 n 等于 0，则直接返回 0。
 * 如果 n 等于 1，则直接返回 1。
 * 创建一个临时数组 tmp，用于存储斐波那契数列中前两个数。
 * 初始化变量 sum 为1，用于计算第 n 个数字。
 * 使用循环从第2个数开始计算直到第 n 个数，每次计算的值为前两个数的和，并更新临时数组 tmp。
 * 返回计算得到的第 n 个数。
 * 这个代码采用了动态规划的思想，通过保存之前的结果来避免重复计算。这种方法的时间复杂度是 O(n)，空间复杂度是 O(1)，效率较高。
*/

console.log(fib(1))
console.log(fib(2))