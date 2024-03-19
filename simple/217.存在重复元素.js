/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

// 测试用例
console.log(containsDuplicate([1, 2, 3, 1])); // 输出：true
console.log(containsDuplicate([1, 2, 3, 4])); // 输出：false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // 输出：true