/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    if (n == 1) return 1
    let num = n
    for (let i = 1; i <= num; i++) {

        if (n < i) {
            return i - 1
        }
        n -= i;
    }

};


console.log(arrangeCoins(5))
console.log(arrangeCoins(8))


// leetcode 双指针解法
var arrangeCoinsBest = function (n) {
    let left = 0;
    let right = n;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (mid * (mid + 1) / 2 <= n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};