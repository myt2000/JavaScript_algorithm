/**
 * @param {number[]} nums
 * @return {number}
 */
// 这道题主要考察求解数组,需要比较大小
var thirdMax = function (nums) {
    let firstMaxNum = secondMaxNum = thirdMaxNum = Number.NEGATIVE_INFINITY;
    for (let num of nums) {
        if (num > firstMaxNum) {
            thirdMaxNum = secondMaxNum;
            secondMaxNum = firstMaxNum;
            firstMaxNum = num;
        } else if (num < firstMaxNum && num > secondMaxNum) {
            thirdMaxNum = secondMaxNum;
            secondMaxNum = num;
        } else if (num < secondMaxNum && num > thirdMaxNum) {
            thirdMaxNum = num;
        }
    }
    return thirdMaxNum === Number.NEGATIVE_INFINITY ? firstMaxNum : thirdMaxNum;

};

console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2]))
console.log(thirdMax([2, 2, 3, 1]))
console.log(thirdMax([1, 1, 2]))



var thirdMaxBest = function (nums) {
    nums.sort((a, b) => b - a)
    let tag = 1, max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (max > nums[i]) {
            max = nums[i]
            tag++
        }
        if (tag === 3) {
            return max
        }
    }
    return nums[0]
};

