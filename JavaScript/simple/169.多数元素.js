/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    // console.log(nums.length / 2)
    // 验证候选元素是否为真正的多数元素
    return nums.filter(num => num === candidate).length > nums.length / 2 ? candidate : null;
};


// 测试示例
// console.log(majorityElement([3, 2, 3]));   // 输出: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 输出: 2