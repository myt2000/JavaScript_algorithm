/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[j - 1]) {
                count++;
            } else {
                break;
            }
        }
        max = Math.max(max, count);
    }
    return max;
};


console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))

// leetcode最优解
var findLengthOfLCISBest = function (nums) {
    let dp = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1
        }
    }
    return Math.max(...dp)
}  