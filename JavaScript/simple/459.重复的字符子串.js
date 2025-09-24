/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const n = s.length;
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) { // 当前长度能够整除原字符串长度
            const sub = s.substring(0, i); // 取出子串
            let flag = true;
            for (let j = i; j < n; j += i) {
                if (s.substring(j, j + i) !== sub) { // 检查后续子串是否与第一个子串相同
                    flag = false;
                    break;
                }
            }
            if (flag) return true;
        }
    }
    return false;
}


// console.log(repeatedSubstringPattern("abab"))
// console.log(repeatedSubstringPattern("aba"))
// console.log(repeatedSubstringPattern("abcabcabcabc"))
// console.log(repeatedSubstringPattern("ababba"))


/**
 * 设字符串长度为 n，遍历的范围是 1 到 n/2。
 * 如果当前遍历到的长度能够整除原字符串长度，并且这个子串与原字符串相同，那么就返回 true，表示原字符串可以由这个子串重复多次构成。
 * 如果遍历完毕都没有找到符合条件的子串，返回 false。
*/



// leetcode最优解
var repeatedSubstringPatternBest = function (s) {
    let str = s + s
    str = str.slice(1, str.length - 1)
    if (str.indexOf(s) !== -1) {
        return true
    } else {
        return false
    }
}
console.log(repeatedSubstringPatternBest("abcabcabcabc"))
// console.log(repeatedSubstringPatternBest("ababba"))

/**
 * 将原字符串 s 重复连接一次，得到新字符串 str。这里是为了处理一种特殊情况，例如 "abab"，重复连接一次后得到 "abababab"，这样可以确保原字符串中的所有子串都至少出现了两次。
 * 利用字符串切片的方法 str.slice(1, str.length - 1)，去掉了重复连接后的字符串 str 的首尾字符，得到的字符串就是去掉了第一个字符和最后一个字符的 str，即去掉了一个子串。
 * 判断去掉首尾字符后的字符串 str 是否包含原字符串 s，如果包含，则说明原字符串 s 可以由其子串重复多次构成，返回 true；否则返回 false。
 * 这个算法的核心思想是，如果一个字符串 s 可以由其子串重复多次构成，那么重复连接后的字符串 str 中，去掉首尾字符后的字符串 str 一定包含原字符串 s。
 * 
 * 这个算法的时间复杂度为 O(n)，其中 n 是字符串的长度。
*/