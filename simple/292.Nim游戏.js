/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    return n % 4 !== 0;
};

// 示例
console.log(canWinNim(4)); // 输出: false
console.log(canWinNim(1)); // 输出: true
console.log(canWinNim(2)); // 输出: true

// 纯数学逻辑，只要不是4的倍数，先手就能赢