/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 双指针判断
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);    // 对孩子的胃口数组排序
    s.sort((a, b) => a - b);    // 对饼干的尺寸数组排序

    let satisfiedChildren = 0;
    let childIndex = 0;
    let cookieIndex = 0;

    while (childIndex < g.length && cookieIndex < s.length) {
        if (s[cookieIndex] >= g[childIndex]) { // 当前饼干满足当前孩子的胃口
            satisfiedChildren++;
            childIndex++;
            cookieIndex++;
        } else { // 当前饼干不能满足当前孩子的胃口，尝试下一块饼干
            cookieIndex++;
        }
    }
    return satisfiedChildren;
};


console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))

/**
 * 首先对孩子的胃口数组 g 和饼干的尺寸数组 s 进行排序，这样可以方便地从小到大依次满足孩子的胃口。
 * 使用两个指针分别指向孩子的胃口数组 g 和饼干的尺寸数组 s 的起始位置。
 * 遍历两个数组，当饼干的尺寸满足当前孩子的胃口时，将该饼干分配给孩子，并将两个指针都向后移动一位；否则只将饼干指针向后移动一位。
 * 继续遍历直到任意一个数组遍历结束，返回已经满足的孩子数量即为结果。
*/


// leetcode最优解
var findContentChildren = function (g, s) {
    // 先给两个数组按照从小到大排序
    const arr = g.sort((a, b) => a - b)
    const brr = s.sort((a, b) => a - b)
    let num = 0
    // 饼干才是关键，没饼干小孩吃P
    brr.forEach(val => {
        if (val >= arr[num]) {
            num++
        }
    })
    return num
};