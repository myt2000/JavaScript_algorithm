/**
 * 有两种特殊字符：

第一种字符可以用一比特 0 表示
第二种字符可以用两比特（10 或 11）表示
给你一个以 0 结尾的二进制数组 bits ，如果最后一个字符必须是一个一比特字符，则返回 true 。


示例 1:

输入: bits = [1, 0, 0]
输出: true
解释: 唯一的解码方式是将其解析为一个两比特字符和一个一比特字符。
所以最后一个字符是一比特字符。
示例 2:

输入：bits = [1,1,1,0]
输出：false
解释：唯一的解码方式是将其解析为两比特字符和两比特字符。
所以最后一个字符不是一比特字符。
*/


/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let i = 0;
    while (i < bits.length - 1) {
        i += bits[i] + 1;
    }
    return i === bits.length - 1;
};


console.log(isOneBitCharacter([1, 1, 1, 0]))
console.log(isOneBitCharacter([1, 0, 0]))
console.log(isOneBitCharacter([1, 1, 0]))


// leetcode最佳解法
var isOneBitCharacterBest = function (bits) {
    let i = 0;
    const n = bits.length;
    while (i < n) {
        if (i == n - 1) return true;
        if (i == n - 2 && bits[i] === 1) return false;
        if (i == n - 2 && bits[i] === 0) return true;
        if (bits[i] === 1) {
            i += 2;
        } else {
            i++;
        }
    }
};