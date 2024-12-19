/**
 * @param {number} n
 * @return {number}
 */
/**
 * 给定一个正整数 n，找到并返回 n 的二进制表示中两个 相邻 1 之间的 最长距离 。如果不存在两个相邻的 1，返回 0 。
 * 如果只有 0 将两个 1 分隔开（可能不存在 0 ），则认为这两个 1 彼此 相邻 。两个 1 之间的距离是它们的二进制表示中位置的绝对差。例如，"1001" 中的两个 1 的距离为 3 。
*/
var binaryGap = function (n) {
    // 将整数 n 转换为二进制字符串
    let binaryString = n.toString(2);

    // 创建一个数组来保存所有 '1' 的索引位置
    let indicesOfOnes = [];

    // 遍历二进制字符串，收集所有 '1' 的索引位置
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            indicesOfOnes.push(i);
        }
    }

    // 如果少于两个 '1'，则直接返回 0
    if (indicesOfOnes.length < 2) {
        return 0;
    }

    // 计算相邻 '1' 之间的最大距离
    let maxDistance = 0;
    for (let i = 1; i < indicesOfOnes.length; i++) {
        let distance = indicesOfOnes[i] - indicesOfOnes[i - 1];
        if (distance > maxDistance) {
            maxDistance = distance;
        }
    }

    return maxDistance;
};

// console.log(binaryGap(22)); // 2

// console.log(binaryGap(8)); // 3

console.log(binaryGap(5));  // 2