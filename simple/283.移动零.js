/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            nums[slowIndex] = nums[fastIndex];
            slowIndex++;
        }
        slowIndex++;
    }
    return nums;
};

// 示例
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // 输出: [1, 3, 12, 0, 0]