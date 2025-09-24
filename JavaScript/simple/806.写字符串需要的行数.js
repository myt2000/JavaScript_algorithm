/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let rows = 1;
    let currentWidth = 0;

    for (let char of s) {
        let charWidth = widths[char.charCodeAt(0) - 'a'.charCodeAt(0)];

        if (currentWidth + charWidth > 100) {
            rows += 1;
            currentWidth = charWidth;
        } else {
            currentWidth += charWidth;
        }
    }

    return [rows, currentWidth];
};


// 示例 1
let widths1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
let S1 = "abcdefghijklmnopqrstuvwxyz";
console.log(numberOfLines(widths1, S1));  // 输出: [3, 60]

// 示例 2
let widths2 = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
let S2 = "bbbcccdddaaa";
console.log(numberOfLines(widths2, S2));  // 输出: [2, 4]