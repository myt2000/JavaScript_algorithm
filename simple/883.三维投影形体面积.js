/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 在 n x n 的网格 grid 中，我们放置了一些与 x，y，z 三轴对齐的 1 x 1 x 1 立方体。
 * 每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。
 * 现在，我们查看这些立方体在 xy 、yz 和 zx 平面上的投影。
 * 投影 就像影子，将 三维 形体映射到一个 二维 平面上。从顶部、前面和侧面看立方体时，我们会看到“影子”。
 * 返回 所有三个投影的总面积 。 
*/

/**
 * xy 平面（顶部）：从顶部看时，只要单元格上有至少一个立方体，它就会贡献 1 的面积到投影。所以对于 xy 平面的投影面积，我们只需要计算非零值的数量。
 * yz 平面（侧面）：从侧面看时，每个列的最大高度决定了该列对 yz 平面投影的贡献。因此，我们需要找到每一列的最大值。
 * zx 平面（前面）：从前面看时，每一行的最大高度决定了该行对 zx 平面投影的贡献。因此，我们需要找到每一行的最大值。
*/
var projectionArea = function (grid) {
    let top = 0, side = 0, front = 0;

    // 计算 top (xy 平面) 投影面积
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            if (grid[i][j] > 0) {
                top++;
            }
        }
    }

    // 计算 side (yz 平面) 和 front (zx 平面) 投影面积
    for (let i = 0; i < grid.length; ++i) {
        let maxInRow = 0, maxInColumn = 0;
        for (let j = 0; j < grid[i].length; ++j) {
            maxInRow = Math.max(maxInRow, grid[i][j]);
            maxInColumn = Math.max(maxInColumn, grid[j][i]);
        }
        side += maxInRow;
        front += maxInColumn;
    }

    return top + side + front;
};


console.log(projectionArea([[1, 2], [3, 4]]))