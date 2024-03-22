/**
 * @param {number[]} nums
 */
function NumArray(nums) {
    this.nums = nums;
    this.prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
    }
}


/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    // 如果 i 为 0，不需要减去前缀和的前一个值，因为那时没有前一个值
    // 如果 i 不为 0，我们需要减去 i-1 位置的前缀和，以得到 i 到 j 之间的和
    return i > 0 ? this.prefixSum[j] - this.prefixSum[i - 1] : this.prefixSum[j];
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// 示例
let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // 输出: 1
console.log(numArray.sumRange(2, 5)); // 输出: -1
console.log(numArray.sumRange(0, 5)); // 输出: -3

// 前缀和的求解方式


// 最优解
// var NumArray = function (nums) {
//     this.data = Array(nums.length + 1).fill(0)
//     for (let i = 0; i < nums.length; i++) {
//         this.data[i + 1] = nums[i] + this.data[i]
//     }

//     console.log(this.data);
// };

// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (left, right) {
//     return this.data[right + 1] - this.data[left]
// };