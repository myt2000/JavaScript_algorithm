/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let xorResult = x ^ y; // 对输入的两个整数进行异或运算
    let distance = 0;

    // 统计异或结果中 1 的个数，即为汉明距离
    while (xorResult > 0) {
        if (xorResult & 1) { // 判断当前位是否为1
            distance++;
        }
        xorResult >>= 1; // 右移一位，继续检查下一位
    }

    return distance;
};

// 示例用法
console.log(hammingDistance(1, 4)); // 输出 2
console.log(hammingDistance(3, 1)); // 输出 1

// leetcode最优解
var hammingDistanceBest = function (x, y) {
    let s = x ^ y, ret = 0
    while (s != 0) {
        ret += s & 1
        s >>= 1
    }
    return ret
};