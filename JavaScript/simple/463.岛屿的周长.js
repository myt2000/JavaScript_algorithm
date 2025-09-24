/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;

    // 遍历每个格子
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) { // 如果当前格子是陆地
                perimeter += 4; // 先假设该格子的周长为4

                // 检查该格子的上方、下方、左方和右方是否有相邻的陆地，有的话则需要减去1
                // 上方
                if (i > 0 && grid[i - 1][j] === 1) {
                    perimeter -= 1;
                }
                // 下方
                if (i < rows - 1 && grid[i + 1][j] === 1) {
                    perimeter -= 1;
                }
                // 左方
                if (j > 0 && grid[i][j - 1] === 1) {
                    perimeter -= 1;
                }
                // 右方
                if (j < cols - 1 && grid[i][j + 1] === 1) {
                    perimeter -= 1;
                }
            }
        }
    }

    return perimeter;
};

// 示例用法
console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])); // 输出 16
console.log(islandPerimeter([[1]])); // 输出 4
console.log(islandPerimeter([[1, 0]])); // 输出 4


// leetcode最优解
var islandPerimeterBest = function (grid) {
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                result += 4;
                if (i != 0 && grid[i - 1][j] == 1) {
                    result -= 2;
                }
                if (j != 0 && grid[i][j - 1] == 1) {
                    result -= 2;
                }
            }
        }
    }
    return result
};
