/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i > 0 && j > 0 && matrix[i][j] !== matrix[i - 1][j - 1]) return false;

        }
    }
    return true;

};


// 示例
const matrix1 = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
];

const matrix2 = [
    [1, 2],
    [2, 2]
];

console.log(isToeplitzMatrix(matrix1)); // 输出：true
console.log(isToeplitzMatrix(matrix2)); // 输出：false