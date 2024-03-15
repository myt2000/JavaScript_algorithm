/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();
    let windowSize = k + 1;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
        // 移除窗口左侧超出范围的元素
        if (i >= windowSize) {
            map.delete(nums[i - windowSize]);
        }
    }
    return false;
};

// 测试用例
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // 输出：true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // 输出：true
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // 输出：false


/**
 * 这个题目要求检查给定的整数数组 nums 中是否存在两个不同的索引 i 和 j，使得 nums[i] 等于 nums[j]，且 i 与 j 之间的绝对差值（即 |i - j|）不大于给定的整数 k。

换句话说，就是判断数组中是否存在距离不超过 k 的重复元素对。例如，在示例1中：


输入：nums = [1,2,3,1], k = 3
输出：true
在该数组中，元素1在位置0和3出现，它们之间的绝对差值是3-0=3，这恰好等于给定的 k 值，所以返回 true。

同样地，在示例2中：


输入：nums = [1,0,1,1], k = 1
输出：true
元素1在位置0、2和3都出现，并且在位置0和1之间、位置2和3之间满足条件 |i - j| <= k，因此返回 true。
*/