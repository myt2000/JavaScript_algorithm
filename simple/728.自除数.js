/**
 * 自除数 是指可以被它包含的每一位数整除的数。

例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
自除数 不允许包含 0 。

给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。



示例 1：

输入：left = 1, right = 22
输出：[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
示例 2:

输入：left = 47, right = 85
输出：[48,55,66,77]

*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let res = [];
    let aar = Array.from({ length: right - left + 1 }, (_, index) => left + index);
    for (let i = 0; i < aar.length; i++) {
        let num = aar[i];
        let str = num.toString();
        let flag = true;
        for (let j = 0; j < str.length; j++) {
            if (num % str[j] !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            res.push(num);
        }
    }
    return res
};

console.log(selfDividingNumbers(1, 22))
console.log(selfDividingNumbers(47, 85))

// leetcode最优解, 跟上面的方法，少了数组的构建，直接以索引遍历即可
var selfDividingNumbersBest = function (left, right) {
    function isSelfDivision(num) {
        let k = num
        while (k > 0) {
            if (num % (k % 10) != 0) {
                return false
            }
            k = Math.floor(k / 10)
        }
        return true
    }
    let res = []
    for (let i = left; i <= right; i++) {
        if (isSelfDivision(i)) {
            res.push(i)
        }
    }
    return res
};