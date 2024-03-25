/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    let res = [];
    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            res.push(nums2[i]);
            set.delete(nums2[i]);
        }
    }
    return res;
};

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))


// chatgpt最佳答案
function intersectionBest(nums1, nums2) {
    // 将 nums1 转换为 Set，方便进行快速查找
    let set1 = new Set(nums1);
    // 用于存储交集的元素
    let resultSet = new Set();

    // 遍历 nums2，如果元素在 set1 中出现，则加入结果集
    for (let num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num);
        }
    }

    // 将结果集转换为数组并返回
    return Array.from(resultSet);
}
