/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];

    let triangle = [[1]];
    for (let i = 1; i < numRows; i++) {
        let newRow = [1];
        // 将前一行的相邻元素相加填充新行
        for (let j = 1; j < i; j++) {
            newRow[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        newRow.push(1); // 每一行的最后一个元素总是1
        triangle.push(newRow);
    }
    return triangle;
};

// 示例用法：
console.log(generate(5));  // 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1));  // 输出: [[1]]