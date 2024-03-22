/**
 * @param {number} n
 * @return {boolean}
 */
// function isPowerOfThree(n) {
//     if (n <= 0) return false; // 0 和负数不是 3 的幂次方

//     // 3 的幂次方除以 3 后应该仍然是整数
//     while (n % 3 === 0) {
//         n = n / 3;
//     }

//     // 最终结果应该是 1
//     return n === 1;
// }

// 示例使用
// console.log(isPowerOfThree(27)); // 输出：true
// console.log(isPowerOfThree(0)); // 输出：false
// console.log(isPowerOfThree(9)); // 输出：true
// console.log(isPowerOfThree(45)); // 输出：false

// 最优解
var isPowerOfThreeBest = function (n) {
    return n > 0 && 1162261467 % n == 0;

};

// 这个函数使用了 Math.log() 函数来计算以 3 为底的对数，并通过 Math.round() 函数来检查结果是否为整数。
// 如果结果是整数，那么 n 就是 3 的幂次方；否则，n 不是 3 的幂次方。这种方法避免了循环和递归，同时也不需要检查很多次除以 3 的操作。

// 示例使用
// console.log(isPowerOfThreeBest(27)); // 输出：true
// console.log(isPowerOfThreeBest(0)); // 输出：false
// console.log(isPowerOfThreeBest(9)); // 输出：true
// console.log(isPowerOfThreeBest(45)); // 输出：false


function isPowerOfThree(n) {
    if (n <= 0) {
        return false;
    }
    const power = Math.log10(n) / Math.log10(3);
    return Number.isInteger(power);
}

// 示例测试
console.log(isPowerOfThree(27));  // 输出：true
console.log(isPowerOfThree(0));   // 输出：false
console.log(isPowerOfThree(9));   // 输出：true
console.log(isPowerOfThree(45));  // 输出：false