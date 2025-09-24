/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num < 10) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return addDigits(sum);
};




// 高级解法：利用规律得出 O(1) 时间复杂度的解决方案
// 发现当 num = 9k + r （其中 k 为任意非负整数，r 为 0 到 8 之间的整数）时，
// 循环求和的结果会是 9 的倍数加上 r。
// 所以我们只需要对 num 取模 9，如果余数为 0，则返回 9，否则返回模 9 的结果。

function addDigitsOptimized(num) {
    return (num - 1) % 9 + 1;
}


console.log(addDigits(38)); // 输出: 2
console.log(addDigits(0));   // 输出: 0
console.log(addDigitsOptimized(38)); // 输出: 2
console.log(addDigitsOptimized(0));   // 输出: 0