/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    // 定义字符与数字的对应关系（A-Z 对应 1-26）
    const letterValues = {};
    for (let i = 65; i <= 90; i++) {
        letterValues[String.fromCharCode(i)] = i - 64;
    }
    // 初始化结果值
    let result = 0;
    // 从右到左遍历到标题字符串
    for (let char of columnTitle.split('').reverse()) {
        result += letterValues[char] * Math.pow(26, columnTitle.length - 1 - columnTitle.indexOf(char));
    }
    return result;
};


function titleToNumber(columnTitle) {
    // 定义字母与数字的对应关系（A-Z 对应 1-26）
    const letterValues = {};
    for (let i = 65; i <= 90; i++) {
        letterValues[String.fromCharCode(i)] = i - 64;
    }

    // 初始化结果值
    let result = 0;

    // 从右到左遍历列标题字符串
    // for (let char of columnTitle.split('').reverse()) {
    //     // 将当前字符转换为数值并乘以适当的基数（26^(当前位置)）
    //     result += letterValues[char] * Math.pow(26, columnTitle.length - 1 - columnTitle.indexOf(char));
    // }
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let char = columnTitle[i];
        // 将当前字符转换为数值并乘以适当的基数（26^(当前位置)）
        result += letterValues[char] * Math.pow(26, columnTitle.length - 1 - i);
    }

    return result;
}
/* letterValues 是
{
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
}
*/
/**
* 1. letterValues[char]：从预定义的对象 letterValues 中获取与当前字符（char）对应的数值，这个数值是基于字母表顺序确定的（A 对应 1，B 对应 2，...，Z 对应 26）。

* 2. Math.pow(26, columnTitle.length - 1 - columnTitle.indexOf(char))：计算基数为 26 的指数表达式，这里的指数表示当前字符在列标题字符串中相对于最右侧字符的位置。例如，在 "AB" 中，字符 'B' 的索引位置是 0（从右向左计数），所以它的指数就是 columnTitle.length - 1 - columnTitle.indexOf(char)，即 2 - 1 - 0 = 1。这意味着我们需要将 'B' 对应的数值乘以 26 的 1 次方（即 26），因为在 Excel 列编号系统中，每向左移动一位，其对应数值就会增大 26 倍。

* 3. result += ...：将上述计算得到的结果累加到总结果变量 result 上，这样就能逐步累积每个字符对最终列序号的贡献值。

*/


// 测试示例
console.log(titleToNumber("A"));   // 输出: 1
console.log(titleToNumber("AB"));  // 输出: 28
console.log(titleToNumber("ZY"));  // 输出: 701