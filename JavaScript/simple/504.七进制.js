/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num === 0) return "0";
    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        num = Math.abs(num);
    }
    let result = '';
    while (num > 0) {
        result = num % 7 + result;
        num = Math.floor(num / 7);
    }
    if (isNegative) {
        result = '-' + result;
    }
    return result;
};


/**
 * 要将一个整数转换为7进制，可以使用除法取余法。具体步骤如下：
 * 判断输入的整数 num 是否为 0，如果是直接返回 "0"。
 * 判断 num 是否为负数，如果是则标记为负数并将 num 取绝对值。
 * 创建一个空字符串 result 用来存储转换后的7进制数字。
 * 进行循环直到 num 为 0：
 * 取 num 对 7 取余，将余数添加到 result 的开头。
 * 将 num 除以 7 取整。
 * 如果标记为负数，则在 result 前面添加负号 "-"。
 * 返回 result。
 * 
*/

// 示例用法
console.log(convertToBase7(100)); // 输出 "202"
console.log(convertToBase7(-7)); // 输出 "-10"