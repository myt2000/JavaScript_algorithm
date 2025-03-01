/**
 * @param {number[][]} image
 * @return {number[][]}
 */
/**
 * 给定一个 n x n 的二进制矩阵 image ，先 水平 翻转图像，然后 反转 图像并返回 结果 。

    水平翻转图片就是将图片的每一行都进行翻转，即逆序。

    例如，水平翻转 [1,1,0] 的结果是 [0,1,1]。
    反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。

    例如，反转 [0,1,1] 的结果是 [1,0,0]。

*/
var flipAndInvertImage = function (image) {
    // 对每一行进行水平翻转和反转操作
    return image.map(row => {
        // 水平翻转（逆序）后进行反转（0变1，1变0）
        return row.reverse().map(value => value === 0 ? 1 : 0);
    });
};

console.log([[1, 1, 0], [1, 0, 1], [0, 0, 0]]) // [[1,0,0],[0,1,0],[1,1,1]]

console.log([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]) // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]