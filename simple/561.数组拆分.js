/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b); // 将数组排序
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i]; // 取相邻的两个数中的较小值，并相加
    }
    return sum;
};


// 测试用例
console.log(arrayPairSum([1, 4, 3, 2])); // 输出 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 输出 9