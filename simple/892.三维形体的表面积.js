/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 给你一个 n * n 的网格 grid ，上面放置着一些 1 x 1 x 1 的正方体。每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。
 * 放置好正方体后，任何直接相邻的正方体都会互相粘在一起，形成一些不规则的三维形体。
 * 请你返回最终这些形体的总表面积。
 * 注意：每个形体的底面也需要计入表面积中
 * 
 * 
 * 要计算放置在 n x n 网格上的正方体形成的三维形体的总表面积，我们需要考虑每个正方体的六个面，并减去由于相邻正方体粘在一起而隐藏的面。具体来说：

每个单元格中的 v 个立方体会贡献 6 * v - 2 * (v - 1) 的表面积（因为每增加一个立方体，就少两个接触面）。
对于每一个立方体，如果它旁边有另一个立方体，则这两个立方体之间会有一个共同的面，这将减少2个单位的表面积（每个立方体各减少1个单位）。
*/
var surfaceArea = function (grid) {
    let totalSurfaceArea = 0;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            if (grid[i][j] > 0) {
                // 计算单个柱子的表面积：每个立方体贡献6个面，但内部接触面需要减去
                totalSurfaceArea += grid[i][j] * 6 - 2 * (grid[i][j] - 1);

                // 减去与左侧和下侧相邻立方体共享的面
                if (i > 0) {
                    totalSurfaceArea -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
                }
                if (j > 0) {
                    totalSurfaceArea -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
                }
            }
        }
    }

    return totalSurfaceArea;
};

console.log(surfaceArea([[1, 2], [3, 4]])); // 34

console.log(surfaceArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));  // 32

console.log(surfaceArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]]));    // 46

