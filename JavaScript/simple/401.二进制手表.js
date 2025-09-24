/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    // 计算一个数字的二进制表示中包含的 1 的个数
    const countBits = num => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };

    const result = [];
    for (let hour = 0; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            // 计算小时和分钟的二进制表示中包含的 1 的个数
            if (countBits(hour) + countBits(minute) === turnedOn) {
                result.push(`${hour}:${minute < 10 ? '0' + minute : minute}`);
            }
        }
    }
    return result;
};

/**
 * countBits的含义
 * 在循环内部，每次迭代，将 num 与 1 进行按位与操作 num & 1，得到的结果为 1 或 0，表示 num 的二进制表示的最低位是 1 还是 0。如果结果为 1，说明最低位是 1，即二进制表示中包含一个 1，将 count 加 1；如果结果为 0，则说明最低位是 0，不需处理。
 * 将 num 右移一位，相当于将二进制表示中的最低位移除，继续下一轮迭代。
 * 循环结束后，返回变量 count 的值，即为数字 num 的二进制表示中包含的 1 的个数。
*/

// 示例测试
console.log(readBinaryWatch(1)); // 输出：["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
// console.log(readBinaryWatch(2)); // 输出：
console.log(readBinaryWatch(9)); // 输出：[]


/**
 * 这道题目要求找出二进制手表可以表示的所有可能时间，其中二进制手表顶部的 4 个 LED 代表小时（0-11），底部的 6 个 LED 代表分钟（0-59）。给定一个整数 turnedOn，表示当前亮着的 LED 的数量，题目要求返回所有可能的时间。
 * 
 * 具体地说，对于每个小时和分钟组合，我们需要计算其二进制表示中包含的 1 的个数，如果等于给定的 turnedOn 数量，则将其添加到结果数组中。
 * 
 * 例如，当 turnedOn = 1 时，表示只有一个 LED 是亮着的。那么可能的时间包括："0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"。
 * 
 * 当 turnedOn = 9 时，表示有 9 个 LED 是亮着的，这种情况下不可能构成一个合法的时间，因为小时和分钟的 LED 总数不可能超过 10 个。

因此，题目要求找出所有可能的时间，使得其二进制表示中包含的亮着的 LED 的数量等于给定的 turnedOn 数量。
*/