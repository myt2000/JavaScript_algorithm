/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let arr = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            arr.push(mat[i][j]);
        }
    }
    if (arr.length !== r * c) {
        return mat;
    }
    let res = [];
    for (let i = 0; i < r; i++) {
        res.push(arr.slice(i * c, i * c + c));
    }
    return res;
};


console.log(matrixReshape([[1, 2], [3, 4]], 1, 4))
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4))