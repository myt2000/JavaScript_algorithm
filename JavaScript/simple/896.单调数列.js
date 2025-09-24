/**
 * @param {number[]} nums
 * @return {boolean}
 */


/**
 * 如果数组是单调递增或单调递减的，那么它是 单调 的。
 * 如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。
 * 当给定的数组 nums 是单调数组时返回 true，否则返回 false。
*/
var isMonotonic = function (nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i - 1]) {
            increasing = false;
        }
    }

    // 如果数组是单调递增或者单调递减，那么至少有一个标志位会保持为 true。
    return increasing || decreasing;
};

console.log(isMonotonic([1, 2, 2, 3]))

console.log(isMonotonic([6, 5, 4, 4]))

console.log(isMonotonic([1, 3, 2]))