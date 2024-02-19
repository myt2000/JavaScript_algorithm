/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n;
    // 初始化前两个状态
    dp = [0, 1, 2];
    // 动态规划填充剩余状态
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

// console.log(climbStairs(2)) // 2
console.log(climbStairs(10)) // 5