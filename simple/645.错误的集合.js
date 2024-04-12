/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let res = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for (let [key, value] of map) {
        if (value > 1) {
            res.push(key)
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            res.push(i)
        }
    }
    return res;
};


console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([1, 1]))



var findErrorNumsBest = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        nums[(nums[i] - 1) % n] += n;
    }
    let los;
    let rep;
    for (let i = 0; i < n; i++) {
        if (nums[i] <= n) {
            los = i + 1;
        }
        if (nums[i] > 2 * n) {
            rep = i + 1;
        }
    }
    return [rep, los];
};