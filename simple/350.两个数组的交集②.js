/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    // 统计 nums1 中每个元素出现的次数
    const map1 = new Map();
    for (const num of nums1) {
        map1.set(num, (map1.get(num) || 0) + 1);
    }

    // 统计交集元素以及出现次数
    const intersection = [];
    for (const num of nums2) {
        if (map1.has(num) && map1.get(num) > 0) {
            intersection.push(num);
            map1.set(num, map1.get(num) - 1);
        }
    }

    return intersection;
}

// 示例测试
console.log(intersect([1, 2, 2, 1], [2, 2])); // 输出：[2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // 输出：[4,9]

/**
 * 这道题目要求的是给定两个整数数组 nums1 和 nums2，返回两数组的交集，并且返回结果中每个元素出现的次数应与元素在两个数组中都出现的次数一致，如果出现次数不一致，则取较小值。
 * 举个例子，如果 nums1 = [1,2,2,1]，nums2 = [2,2]，那么它们的交集是 [2,2]，因为元素 2 在 nums1 中出现了两次，在 nums2 中也出现了两次。
 * 这个问题可以通过统计每个数组中每个元素出现的次数，然后求交集并比较出现次数来解决。
*/