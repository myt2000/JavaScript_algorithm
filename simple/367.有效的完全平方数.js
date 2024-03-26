/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
    // 边界情况处理
    if (num === 1) {
        return true;
    }

    // 二分查找
    let left = 1, right = num;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let square = mid * mid;
        if (square === num) {
            return true;
        } else if (square < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

// 示例测试
console.log(isPerfectSquare(16)); // 输出：true
console.log(isPerfectSquare(14)); // 输出：false