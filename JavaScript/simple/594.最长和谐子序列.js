/**
 * @param {number[]} nums
 * @return {number}
 */
// 这道题我个人感觉很无厘头
// 要找到最长的和谐子序列的长度，首先需要统计每个元素出现的频次，并检查是否存在某对相邻元素，它们的差值正好是 1。
// 然后，找到频次和相邻元素之间的最大和，即为最长和谐子序列的长度。
var findLHS = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    let max = 0
    for (let [key, value] of map) {
        if (map.has(key + 1)) {
            max = Math.max(max, value + map.get(key + 1))
        }
    }
    return max;
};

// 示例
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
console.log(findLHS([1, 2, 3, 4]))
console.log(findLHS([1, 1, 1, 1]))