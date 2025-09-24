/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 自己写的，实现不太对，可能没有理解题目意思
// var nextGreaterElement = function (nums1, nums2) {
//     let res = [];
//     for (let i = 0; i < nums1.length; i++) {
//         let index = nums2.indexOf(nums1[i]);
//         if (index >= 0 && index < nums2.length - 1) {
//             if (index + 1 < nums2.length) {
//                 console.log(`nums2.slice(index, nums2.length - 1): ${nums2.slice(index, nums2.length - 1)}`)
//                 let aar = nums2.slice(index + 1, nums2.length)
//                 res.push(Math.max(...aar));
//             } else {
//                 res.push(nums2[index])
//             }

//         }
//         else {
//             res.push(-1);
//         }
//     }
//     return res;
// };

// 先对nums2进行遍历，如果num > stack[stack.length - 1]，就放入map中，否则就放入数组中，这样下一个最大值的就得到了map映射
var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    const nextGreater = new Map();
    const result = [];

    // 遍历 nums2，构建 nextGreater 映射
    for (const num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            nextGreater.set(stack.pop(), num);
        }
        stack.push(num);
    }

    // 遍历 nums1，根据 nextGreater 获取结果
    for (const num of nums1) {
        result.push(nextGreater.get(num) || -1);
    }

    return result;
};

/**
 * 创建一个空数组 stack 作为单调栈。
 * 创建一个哈希表 nextGreater，用于存储每个元素的下一个更大元素。
 * 遍历数组 nums2，对于每个元素，进行以下操作：
 * 如果栈不为空且当前元素大于栈顶元素，说明当前元素是栈顶元素的下一个更大元素，将该对应关系存入 nextGreater 中，并将栈顶元素出栈，直到栈为空或者当前元素小于等于栈顶元素。
将当前元素入栈。
 * 遍历数组 nums1，对于每个元素，从 nextGreater 中获取对应的下一个更大元素，如果不存在，则将 -1 加入结果数组中。
*/


// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))



var nextGreaterElementBest = function (nums1, nums2) {
    // 1. 声明一个 hash 表、单调栈、结果数组
    const map = new Map(), stack = [], res = new Array(nums1.length).fill(-1);

    // 2. 找到所有存在下一个更大的元素，放入 map 中，key：栈顶元素，value：当前元素
    nums2.forEach(item => {
        while (stack.length && item > stack[stack.length - 1]) {
            map.set(stack.pop(), item)
        };
        stack.push(item);
    });

    // 3. 遍历 nums1 将结果推入 res 中
    nums1.forEach((item, inx) => {
        res[inx] = map.get(item) || -1;
    });

    return res;
};