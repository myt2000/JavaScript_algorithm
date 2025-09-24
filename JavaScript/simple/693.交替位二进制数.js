/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let prevBit = n & 1; // 获取 n 的最低位
    n >>= 1; // 右移一位，准备检查下一位
    while (n > 0) {
        let currBit = n & 1; // 获取 n 的当前位
        if (currBit === prevBit) {
            return false; // 如果当前位和前一位相同，则返回 false
        }
        prevBit = currBit; // 更新前一位为当前位
        n >>= 1; // 右移一位，准备检查下一位
    }
    return true; // 如果所有相邻位都不相同，则返回 true
}

// 示例
console.log(hasAlternatingBits(5)); // 输出 true
console.log(hasAlternatingBits(7)); // 输出 false
console.log(hasAlternatingBits(11)); // 输出 false


// leetcode最优解
var hasAlternatingBits = function (n) {
    // 初始值只要不是0、1
    let cur = -1;
    while (n) {
        // 个位是几：n & 1
        let gewei = n & 1;
        //  ^异或：如果相同(cur ^ u) == 0 则不是
        if ((cur ^ gewei) == 0) return false;
        // 记录当前值
        cur = gewei;
        n >>= 1;
    }
    return true;
};