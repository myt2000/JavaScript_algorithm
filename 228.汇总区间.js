/**
 * @param {number[]} nums
 * @return {string[]}
 */
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


var summaryRanges = function (nums) {
    if (nums.length === 0) {
        return []
    }
    nums = nums.sort((a, b) => a - b)
    let result = []
    let temp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(temp[temp.length - 1] - nums[i]) === 1) {
            temp.push(nums[i])
        } else {
            result.push(temp)
            temp = [nums[i]]
        }
    }
    if (temp.length > 0) {
        result.push(temp)
    }
    return result.map(arr => arr.length === 1 ? arr[0] + '' : `${arr[0]}->${arr[arr.length - 1]}`)
};
// 示例测试
// let nums1 = [0, 1, 2, 4, 5, 7];
// console.log(summaryRanges(nums1)); // ["0->2", "4->5", "7"]

let nums2 = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(nums2)); // ["0", "2->4", "6", "8->9"]