/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    // 找到 num 的二进制表示中最高位的 1 所在的位置
    let mask = 1;
    while (mask <= num) {
        mask <<= 1;
        console.log(`mask:${mask}`)
    }
    // 输入num:5, mask - 1 得到7 ，二进制就是111 
    mask -= 1;

    // 对 num 取反，即 num 和 mask 进行异或运算  5的二进制是101， 7的二进制是111，异或运算后得到010，即补数2
    return num ^ mask;
};

// 示例用法
console.log(findComplement(5)); // 输出 2
console.log(findComplement(1)); // 输出 0

/**
 * 1.首先找到 num 的二进制表示中最高位的 1 所在的位置，即该整数的最高位的位数。
 * 2.构造一个与 num 有相同位数，并且所有位都为 1 的二进制数 mask，可以通过将最高位的 1 左移一位，然后减去 1 来得到。
 * 3.对 num 取反，即 num 和 mask 进行异或运算。
 * 4.返回取反后的结果即为补数。
*/