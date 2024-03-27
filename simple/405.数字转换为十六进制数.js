/**
 * @param {number} num
 * @return {string}
 */

/**
 * 输入的数值是32位有符号整数。在十六进制表示中，每个十六进制位对应4个二进制位。因此，我们可以将整数按4个二进制位一组进行处理，将每组转换为对应的十六进制字符。
 * 
 * 例如，对于一个32位整数，可以将其划分为8组，每组4个二进制位，然后将每组转换为对应的十六进制字符。这样可以便利地处理整数的每个部分，并将其转换为对应的十六进制表示。
 * 
 * 这种方法保证了对32位整数的完整处理，并且每次处理的位数合理，方便了整数到十六进制的转换过程。
*/
var toHex = function (num) {
    if (num === 0) {
        return '0';
    }
    const hexChars = '0123456789abcdef';
    let result = '';
    const mask = 0b1111; // 用于获取低四位的掩码
    for (let i = 0; i < 8; i++) { // 32位整数，每次处理4位
        const digit = num & mask; // 获取低四位
        result = hexChars[digit] + result; // 将对应的十六进制字符添加到结果的开头
        num >>= 4; // 将数字右移4位
    }
    return result.replace(/^0+/, ''); // 去掉前导0
};


// 示例
console.log(toHex(26)); // 输出: "1a"
console.log(toHex(-1)); // 输出: "ffffffff"


var toHexBest = function (num) {
    if (num === 0) {
        return "0";
    }
    const sb = [];
    for (let i = 7; i >= 0; i--) {
        const val = (num >> (4 * i)) & 0xf;
        if (sb.length > 0 || val > 0) {
            const digit = val < 10 ? String.fromCharCode('0'.charCodeAt() + val) : String.fromCharCode('a'.charCodeAt() + val - 10);
            sb.push(digit);
        }
    }
    return sb.join('');

};