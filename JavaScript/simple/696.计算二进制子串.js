/**
 * @param {string} s
 * @return {number}
 */
/**
 * 初始化计数器count为0，用于累计符合条件的子串数量。
 * 初始化prevLength为0，用于保存前一个连续相同字符子串的长度。
 * 初始化currLength为1，用于记录当前连续相同字符子串的长度，初始时假设第一个字符自身就是一个长度为1的子串。
 * 使用for循环遍历字符串s，从第二个字符开始（索引i=1）直到字符串末尾。
 * 在循环内判断当前字符s[i]是否与前一个字符s[i - 1]相等。
 * 如果相等，表示当前字符延续了前一个子串，更新currLength加1。
 * 如果不相等，表示遇到了新的子串，这时需要将prevLength和currLength中较小的一个累加到count，然后将prevLength更新为currLength的值，再将currLength重置为1，准备开始计算下一个连续子串的长度。
 * 循环结束后，别忘了处理最后一个连续子串（因为在循环条件中没有检查最后一个字符之后的情况），将prevLength和currLength中较小的一个累加到count。
 * 最后返回计数器count作为符合条件的连续子串的数量。
*/


var countBinarySubstrings = function (s) {
    let count = 0;
    let prevLength = 0;
    let currLength = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currLength++;
        } else {
            count += Math.min(prevLength, currLength);
            prevLength = currLength;
            currLength = 1;
        }
    }

    // 加上最后一个连续子串对应的数量
    count += Math.min(prevLength, currLength);

    return count;
}

// 示例
console.log(countBinarySubstrings("00110011")); // 输出 6
console.log(countBinarySubstrings("10101")); // 输出 4

// 个人感觉此题有点难懂

/**
 * 举个例子，对于输入字符串 "00110011"，在遍历过程中会遇到以下情况：
 * 遇到 '0'，currLength = 1，prevLength = 0，不处理。
 * 遇到 '0'，currLength = 2，prevLength = 1，此时有一个有效子串 "01"，加入结果中，更新 prevLength 和 currLength。
 * 遇到 '1'，currLength = 1，prevLength = 2，不处理。
 * 遇到 '1'，currLength = 2，prevLength = 1，此时有一个有效子串 "0011"，加入结果中，更新 prevLength 和 currLength。
 * 遇到 '0'，currLength = 1，prevLength = 2，不处理。
 * 遇到 '0'，currLength = 2，prevLength = 1，此时有一个有效子串 "01"，加入结果中，更新 prevLength 和 currLength。
 * 遇到 '1'，currLength = 1，prevLength = 2，不处理。
 * 遇到 '1'，currLength = 2，prevLength = 1，此时有一个有效子串 "0011"，加入结果中，更新 prevLength 和 currLength。
 * 最后将结果返回即可。
 *
 */ 