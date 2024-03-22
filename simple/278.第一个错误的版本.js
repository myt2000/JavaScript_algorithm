/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    var findFirstBadVersion = function (n) {
        let left = 1;
        let right = n;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid; // 如果中间版本是好的，则错误版本一定在右边部分
            } else {
                left = mid + 1;  // 如果中间版本是坏的，则错误版本一定在左边部分 
            }
        }
        // 当left等于right时，找到的就是第一个错误版本
        return left
    };
    return findFirstBadVersion;
};



// 假设这是实际环境中的 isBadVersion API
let actualIsBadVersion = function (version) {
    // 这里仅用于模拟实际情况，实际环境中可能是与服务器交互或执行单元测试等操作
    if (version === 4 || version === 1) {
        return true;
    } else {
        return false;
    }
};

// 创建解决方案并传入实际的 isBadVersion 函数
let findFirstBadVersion = solution(actualIsBadVersion);

// 示例1
console.log(findFirstBadVersion(5)); // 输出: 4

// 示例2
console.log(findFirstBadVersion(1)); // 输出: 1