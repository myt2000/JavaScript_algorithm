/**
 * @param {number[]} nums
 * @return {string[]}
 */

// 自己写的错误答案，最后的情况处理的有问题
// var summaryRanges = function (nums) {
//     let result = [];
//     let start = nums[0];
//     let countNum = 1;
//     for (let i = 1; i <= nums.length; i++) {
//         if (nums[i] !== nums[i - 1] + 1 || i === nums.length - 1) {
//             console.log(`-------------`)
//             console.log(`i: ${i}, nums.length-1: ${nums.length - 1}`)
//             console.log(`start + i - countNum: ${start + i - countNum}`)
//             console.log(`nums[i]: ${nums[i]}`)
//             console.log(`countNum: ${countNum}`)
//             if (start + i - countNum === nums[i] || (start === nums[i - 1] && nums[i] !== nums[i - 1] + 1)) {
//                 // 判断是否是连续的
//                 result.push(String(start))
//                 countNum = i
//             }
//             else {
//                 console.log(`${start} -> ${nums[i - 1]}`)
//                 result.push(`${start}->${nums[i - 1]}`)
//                 countNum = i
//             }

//         }

//         if (i < nums.length && nums[i] !== nums[i - 1] + 1) {
//             start = nums[i]
//             console.log(`start: ${start}`)
//         }


//     }
//     return result;
// };

// function summaryRanges(nums) {
//     let result = [];
//     if (nums.length === 0) return result;

//     let start = nums[0];
//     let end = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== end + 1) {
//             // 当当前数字与上一数字不连续时，将之前的区间添加到结果数组中
//             if (start === end) {
//                 result.push(String(start));
//             } else {
//                 result.push(`${start}->${end}`);
//             }
//             // 更新新的起始和结束点
//             start = nums[i];
//         }
//         end = nums[i];
//     }

//     // 处理最后一个区间
//     if (start === end) {
//         result.push(String(start));
//     } else {
//         result.push(`${start}->${end}`);
//     }

//     return result;
// }

// 最优解
var summaryRanges = function (nums) {
    if (nums.length === 0) {
        return []
    }
    // (a, b) 表示每次比较时传入的两个待比较元素。
    // a - b 用于计算两个数之间的差值。在 JavaScript 中，如果 a - b 结果小于 0，则认为 a 应该排在 b 前面；若结果等于 0，则认为 a 和 b 相等，可以保持原有顺序或交换位置（具体取决于实现）；若结果大于 0，则认为 b 应该排在 a 前面。
    nums = nums.sort((a, b) => a - b)
    let result = []
    let temp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        // 如果临时列表相减为1, 则将当前数字添加到临时列表中
        if (Math.abs(temp[temp.length - 1] - nums[i]) === 1) {
            temp.push(nums[i])
            // 否则将临时列表添加到结果列表中，并更新临时列表        
        } else {
            result.push(temp)
            temp = [nums[i]]
        }
    }
    // 处理最后一个区间
    if (temp.length > 0) {
        result.push(temp)
    }
    // 如果当前区间（即 arr）只有一个元素（arr.length === 1），那么直接将这个元素转换为字符串（通过加上空字符串 '' 来实现类型转换）并返回。
    // 否则，如果区间包含多个元素，则返回形如 "起始值->结束值" 的字符串，这里使用了模板字符串 ${} 的方式来插入变量。
    return result.map(arr => arr.length === 1 ? arr[0] + '' : `${arr[0]}->${arr[arr.length - 1]}`)
};
// 示例测试
// let nums1 = [0, 1, 2, 4, 5, 7];
// console.log(summaryRanges(nums1)); // ["0->2", "4->5", "7"]

let nums2 = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(nums2)); // ["0", "2->4", "6", "8->9"]