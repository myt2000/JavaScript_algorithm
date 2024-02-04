/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums.length) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            if (i !== j) {
                nums[i] = nums[j];
            }
        }
    }

    // 清理数组中无效的部分
    while (nums.length > i + 1) {
        nums.pop();
    }

    return i + 1;
};

// 因为有断言，所以没有办法使用set
// var removeDuplicates2 = function (nums) {
//     if (!nums.length) return 0;
//     let set1 = new Set(nums);
//     nums = Array.from(set1);
//     return nums.length, nums;
// };

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates2([1, 1, 2]))
