/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//     let numStastics = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (numStastics.hasOwnProperty(nums[i])) {
//             numStastics[nums[i]]++;
//         }
//         else {
//             numStastics[nums[i]] = 1;
//         }
//     }
//     return Object.keys(numStastics).filter((item) => numStastics[item] === 1)[0];
// };

// 最高效率的代码
var singleNumber = function (nums) {
    let single = 0
    for (let i = 0; i < nums.length; ++i) {
        single ^= nums[i]
    }
    return single
};
console.log(singleNumber([2, 2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))