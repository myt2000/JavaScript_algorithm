/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
/** 
 * Number.MAX_SAFE_INTEGER 静态数据属性表示JavaScript中的最大安全整数 (2^53 – 1).
 * MIN_SAFE_INTEGER静态数据属性表示JavaScript中的最小安全整数，或 -(2^53-1)。
 */
function shortestToChar(s, c) {
    const n = s.length;
    const answer = new Array(n).fill(Number.MAX_SAFE_INTEGER);

    // 第一遍扫描：从左到右
    let prev = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; ++i) {
        if (s[i] === c) {
            prev = i;
        }
        answer[i] = Math.min(answer[i], Math.abs(i - prev));
    }

    // 第二遍扫描：从右到左
    prev = Number.MAX_SAFE_INTEGER;
    for (let i = n - 1; i >= 0; --i) {
        if (s[i] === c) {
            prev = i;
        }
        answer[i] = Math.min(answer[i], Math.abs(i - prev));
    }

    return answer;
}

// 示例测试
console.log(shortestToChar("loveleetcode", "e")); // [3,2,1,0,1,0,0,1,2,2,1,0]
console.log(shortestToChar("aaab", "b")); // [3,2,1,0]



