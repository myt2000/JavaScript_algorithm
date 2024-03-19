/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let columnStr = '';
    while (columnNumber > 0) {
        // 计算余数并将其转换为字母
        let remainder = (columnNumber - 1) % 26;
        columnStr = String.fromCharCode(65 + remainder) + columnStr;
        // 更新列号（向上取整除以26）
        columnNumber = Math.floor((columnNumber - remainder) / 26);
    }
    return columnStr;
};


// 测试示例
console.log(convertToTitle(1));  // 输出: "A"
console.log(convertToTitle(28));  // 输出: "AB"
console.log(convertToTitle(701));  // 输出: "ZY"
console.log(convertToTitle(2147483647));  // 输出: "FXSHRXW"