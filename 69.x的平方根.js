/**
 * @param {number} x
 * @return {number}
 */

/**
 * 计算非负整数 x 的算术平方根，并且不使用内置的指数函数，可以采用一种迭代算法，比如牛顿法（Newton's method）或者二分查找法（Binary Search）进行近似求解。由于要求结果是整数且只保留整数部分，我们可以设计一个简单的二分查找策略：

1. 设置一个搜索区间 [0, x]，因为我们知道算术平方根肯定在这个范围内。
3. 在这个区间内执行类似于二分查找的过程，不断将区间的宽度缩小一半，直到找到一个数 guess 使得 guess * guess <= x 且 guess + 1 > x。
4. 当满足上述条件时，guess 就是我们需要返回的结果，因为它是最接近但不大于 x 的那个完全平方数的平方根。
*/
var mySqrt = function (x) {
    if (x === 0 || x === 1) {
        return x;
    }
    let left = 0;
    let right = x;
    const step = Math.floor(Math.sqrt(x));
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (mid * mid === x) {
            return mid;
        }
        else if (mid * mid < x) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return (left * left > x) ? left - 1 : left;
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(0)); // 0
console.log(mySqrt(1)); // 1
console.log(mySqrt(9)); // 3
console.log(mySqrt(16)); // 4
console.log(mySqrt(20)); // 4