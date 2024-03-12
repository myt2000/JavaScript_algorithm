/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let binaryStr = n.toString(2).padStart(32, '0');
    let reversedBinaryStr = binaryStr.split('').reverse().join('');
    return parseInt(reversedBinaryStr, 2);
};
/**
 * padStart(字符串长度，开头添加的字符串) https://blog.csdn.net/weixin_43845090/article/details/132333582
*/

console.log(reverseBits(43261596)); // 输出: 964176192
console.log(reverseBits(4294967293)); // 输出: 3221225471