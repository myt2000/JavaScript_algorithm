/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function (n) {
//     if (n === 1) return true;
//     num = n.toString(2);
//     numLength = num.length - 1;
//     return n === Math.pow(2, numLength);
// };

function isPowerOfTwo(n) {
    // 一个数如果是2的幂次方，则它的二进制表示中仅包含一个1，其余都是0
    // 因此，对这个数进行减1操作后与原数进行与运算(&)，结果应为0
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(16))