/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */


// var transpose = function (matrix) {
//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     const res = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             res[j][i] = matrix[i][j];
//         }
//     }
//     return res;
// };
// 最优解法
var transpose = function (matrix) {
    return matrix[0].map((v, i) => matrix.map((a, j) => a[i]))
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

console.log(transpose([[1, 2, 3], [4, 5, 6]]));

