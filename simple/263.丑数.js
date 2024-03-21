/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) return false;
    if (n === 1) return true;

    const primes = [2, 3, 5];
    for (let i = 0; i < primes.length; i++) {
        while (n % primes[i] == 0) {
            console.log(`primes[i]: ${primes[i]}, n % primes[i]: ${n % primes[i]}, n: ${n}`)
            n /= primes[i];
        }
    }
    return n === 1;
};

// 示例测试
// console.log(isUgly(6)); // 输出：true
// console.log(isUgly(1)); // 输出：true
console.log(isUgly(30)); // 输出：false

// 测试边界条件
console.log(isUgly(0)); // 输出：false