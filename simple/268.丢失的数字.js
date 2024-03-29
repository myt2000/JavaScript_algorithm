/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//     let result = nums.length + 1;
//     let numbersArray = Array.from({ length: result }, (_, index) => index);
//     let numsSet = new Set(nums);
//     const differenceResult = numbersArray.filter(item => !numsSet.has(item));
//     return differenceResult[0];
// };

function missingNumber(nums) {
    let missing = 0;
    for (let i = 0; i <= nums.length; i++) {
        missing ^= i;
        missing ^= nums[i];
    }
    return missing;
}

// 示例测试
console.log(missingNumber([3, 0, 1])); // 输出：2
console.log(missingNumber([0, 1])); // 输出：2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 输出：8
console.log(missingNumber([0])); // 输出：1

// 最优解
var missingNumberBest = function (nums) {
    let sum = 0;

    for (let i = 0; i <= nums.length; i++) {
        sum += i;
        if (i < nums.length) {
            sum = sum - nums[i];
        }
    }

    return sum;
}


