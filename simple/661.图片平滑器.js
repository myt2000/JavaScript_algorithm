/**
 * @param {number[][]} img
 * @return {number[][]}
 */

/**
 * 获取输入图像的行数和列数，并初始化一个与输入图像相同大小的二维数组 result，用于存储平滑处理后的图像。
 * 遍历输入图像的每个像素点，对于每个像素点 (i, j)，计算其周围像素点的平均灰度。
 * 使用嵌套的循环遍历 (i, j) 周围的像素点，并将其灰度值累加到 total 变量中，同时增加 count 变量以统计参与平均计算的像素点数量。
 * 计算 (i, j) 周围像素点的平均灰度，并将结果存储在 result[i][j] 中，使用 Math.floor() 方法向下取整。
 * 最后返回存储平滑处理后的图像的二维数组 result。
*/
var imageSmoother = function (img) {
    const m = img.length;
    const n = img[0].length;
    const result = new Array(m).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let count = 0;
            let total = 0;
            console.log(`-----i: ${i}, j: ${j}-------`)
            for (let x = Math.max(0, i - 1); x < Math.min(m, i + 2); x++) {
                for (let y = Math.max(0, j - 1); y < Math.min(n, j + 2); y++) {
                    total += img[x][y];
                    console.log(`x:${x},y:${y}`)
                    count++;
                }
            }
            result[i][j] = Math.floor(total / count);
        }
    }
    return result;
}

// 示例图像
const img1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const img2 = [[100, 200, 100], [200, 50, 200], [100, 200, 100]];

// 调用函数进行平滑处理
const result1 = imageSmoother(img1);
// const result2 = imageSmoother(img2);

// 输出结果
console.log("示例 1:");
result1.forEach(row => console.log(row));
console.log();

// console.log("示例 2:");
// result2.forEach(row => console.log(row));
