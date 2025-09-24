/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

// 二分查找法
var guessNumber = function (n) {
    let left = 1, right = n;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let res = guess(mid);
        if (res === 0) {
            return mid;
        } else if (res === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};



// 示例测试
let pick = 6;
console.log(guessNumber(10)); // 输出：6

// 示例函数，用于模拟 guess 函数
function guess(num) {
    if (num === pick) {
        return 0;
    } else if (num < pick) {
        return 1;
    } else {
        return -1;
    }
}

/**
 * 我们设定一个猜测范围，从 1 到 n。
 * 然后，每次猜测中间的数字，如果返回值是 -1，表示目标数字比猜测的数字小，则调整猜测范围为左半部分；
 * 如果返回值是 1，表示目标数字比猜测的数字大，则调整猜测范围为右半部分；
 * 如果返回值是 0，表示猜测正确，返回猜测的数字。
*/

var guessNumberBest = function (n) {
    let left = 1, right = n
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2)
        if (guess(mid) <= 0) right = mid
        else left = mid + 1
    }
    return left
};  