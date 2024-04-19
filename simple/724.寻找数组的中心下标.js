/**
 * 给你一个整数数组 nums ，请计算数组的 中心下标 。

数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。


示例 1：

输入：nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
中心下标是 3 。
左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
示例 2：

输入：nums = [1, 2, 3]
输出：-1
解释：
数组中不存在满足此条件的中心下标。
示例 3：

输入：nums = [2, 1, -1]
输出：0
解释：
中心下标是 0 。
左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 先求总和，然后减去左侧元素，如果相等，返回当前下标，否则继续循环，就不需要计算右边开始的元素了
// 题目有点误导解法
var pivotIndex = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};



console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))


// leetcode最佳解法，按照题目的思路解题

var pivotIndexBest = function (nums) {
    const left_sum = [0];
    let curr_left_sum = 0;
    const right_sum = [0];
    let curr_right_sum = 0;

    for (let i = 1; i < nums.length; i++) {
        curr_left_sum += nums[i - 1];
        left_sum.push(curr_left_sum);
    }
    for (let j = nums.length - 2; j >= 0; j--) {
        curr_right_sum += nums[j + 1];
        right_sum.push(curr_right_sum);
    }
    right_sum.reverse();
    // console.log(left_sum);
    // console.log(right_sum);

    const pivots = left_sum.reduce((acc, ls, index) => {
        if (ls === right_sum[index]) {
            acc.push(index);
        }
        return acc;
    }, [])
    return pivots.length ? pivots[0] : -1;
}