/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 通义千问的错误写法
// var moveZeroes = function (nums) {
//     let slowIndex = 0;
//     for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
//         if (nums[fastIndex] !== 0) {
//             nums[slowIndex] = nums[fastIndex];
//             slowIndex++;
//         }
//         slowIndex++;
//     }
//     return nums;
// };


// Kimi最优解， lastNonZeroIndex相当于只统计非零元素的个数，然后和0元素交换位置，这样位置还不会变
function moveZeroes(nums) {
    let lastNonZeroIndex = 0; // 双指针，初始化为第一个元素的位置

    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 如果当前元素是非零的
        if (nums[i] !== 0) {
            // 将非零元素交换到双指针所在位置
            let temp = nums[i];
            nums[i] = nums[lastNonZeroIndex];
            nums[lastNonZeroIndex] = temp;

            // 移动双指针
            lastNonZeroIndex++;
        }
    }
    return nums;
}

// 示例
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // 输出: [1, 3, 12, 0, 0]

// 最优解
var moveZeroesBest = function (nums) {
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // 需要和左边的交换顺序,
            nums[left] = nums[i]
            if (left !== i) {
                nums[i] = 0
            }
            left++
        }
    }
}