/**
 * @param {string} s
 * @return {number[][]}
 */

/**
 * 在一个由小写字母构成的字符串 s 中，包含由一些连续的相同字符所构成的分组。

    例如，在字符串 s = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。

    分组可以用区间 [start, end] 表示，其中 start 和 end 分别表示该分组的起始和终止位置的下标。上例中的 "xxxx" 分组用区间表示为 [3,6] 。

    我们称所有包含大于或等于三个连续字符的分组为 较大分组 。

    找到每一个 较大分组 的区间，按起始位置下标递增顺序排序后，返回结果。
*/
var largeGroupPositions = function (s) {
    let result = [];
    let start = 0; // 当前分组的开始位置
    for (let end = 0; end <= s.length; end++) {
        // 如果到达字符串末尾或当前字符不同于下一个字符
        if (end === s.length || s[end] !== s[start]) {
            if (end - start >= 3) {
                // 记录较大分组的起始和终止位置
                result.push([start, end - 1]);
            }
            // 更新下一个分组的开始位置
            start = end;
        }
    }
    return result;
};

console.log(largeGroupPositions("aaa"));
// console.log(largeGroupPositions("abbxxxxzzy")); // [[3, 6]]

// console.log(largeGroupPositions("abc")); // []

// console.log(largeGroupPositions("abcdddeeeeaabbbcd")); // [[3, 5], [6, 9], [12, 14]]]

// console.log(largeGroupPositions("aba")); // []