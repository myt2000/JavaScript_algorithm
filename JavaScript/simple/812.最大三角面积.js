/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 * 计算三角形面积的一个常用方法是使用向量叉积公式
 * Area = 1/2|x1(y2-y3)+x2(y3-y1)+x3(y1-y2))|
 * 三重循环遍历所有可能的点组合，计算每个三角形的面积，并记录最大的面积。
*/
var largestTriangleArea = function (points) {
    // 计算三角形面积的函数
    function triangleArea(p1, p2, p3) {
        const x1 = p1[0], y1 = p1[1];
        const x2 = p2[0], y2 = p2[1];
        const x3 = p3[0], y3 = p3[1];
        return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
    }

    let maxArea = 0;
    const n = points.length;

    // 三重循环遍历所有可能的点组合
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const area = triangleArea(points[i], points[j], points[k]);
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};


// 示例 1
const points1 = [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]];
console.log(largestTriangleArea(points1));  // 输出: 2.00000

// 示例 2
const points2 = [[1, 0], [0, 0], [0, 1]];
console.log(largestTriangleArea(points2));  // 输出: 0.50000