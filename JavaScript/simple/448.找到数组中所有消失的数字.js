/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 索引关系和数组值的关系，通过数组元素值，确定元素位置，然后将非负数的元素位置，加入结果数组中
var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }

    // 再次遍历数组，查找没有找到的数字
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result
};

// 示例用法
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // 输出 [5,6]
console.log(findDisappearedNumbers([1, 1])); // 输出 [2]

// leetcode最佳解法，通过设置为
var findDisappearedNumbersBest = function (nums) {
    const tmp = new Array(nums.length);
    const res = [];
    nums.forEach(num => {
        tmp[num - 1] = num;
    })
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] === undefined) res.push(i + 1);
    }
    return res;
};

/**
 * const tmp = new Array(nums.length);：创建一个与 nums 数组相同长度的临时数组 tmp，初始值为 undefined。
 * nums.forEach(num => { tmp[num - 1] = num; })：遍历 nums 数组，将每个数字 num 对应的索引 num - 1 处的值设为 num，表示该数字已经出现过。
 * for (let i = 0; i < tmp.length; i++) { if (tmp[i] === undefined) res.push(i + 1); }：再次遍历 tmp 数组，找出所有值为 undefined 的索引，将这些索引加一后加入到结果数组 res 中，表示这些数字是未出现过的。
*/