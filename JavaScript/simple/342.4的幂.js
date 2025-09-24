/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 1) return true;
    if (n <= 0) return false;

    // 4 的幂次方除以 4 后应该仍然是整数
    while (n % 4 === 0) {
        n = n / 4;
    }

    // 最终结果应该是 1
    return n === 1;
};


console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));


function isPowerOfFourBest(n) {
    return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
}

/**
 * 要判断一个整数是否是 4 的幂次方，有几种方法可以实现。其中一种方法是利用数学性质，即 4 的幂次方的二进制表示中，只有一个 1 出现在奇数位上，例如：4^1 = 4 (100), 4^2 = 16 (10000), 4^3 = 64 (1000000)，以此类推。
 * 首先检查 n 是否为正数；
 * 然后检查 n 是否是 2 的幂次方，即 (n & (n - 1)) === 0；
 * 最后检查 n 的二进制表示中的 1 是否出现在奇数位上，这可以通过 (n & 0xaaaaaaaa) === 0 来实现，其中 0xaaaaaaaa 是一个 32 位整数，二进制表示中奇数位上都是 0，偶数位上都是 1。
 * 时间复杂度O(1)
*/