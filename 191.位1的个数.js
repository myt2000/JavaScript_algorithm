/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        // 将n右移i位，取出最低位的值（0或1）
        if (n & 1) {
            count++;
        }
        // n向右移动一位
        n >>= 1;
    }
    return count;
};


console.log(hammingWeight(0b00000000000000000000000000001011)); // 输出: 3
console.log(hammingWeight(0b00000000000000000000000010000000)); // 输出: 1
console.log(hammingWeight(0b11111111111111111111111111111101)); // 输出: 31