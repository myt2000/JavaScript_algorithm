/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let mapSToT = new Map();
    let mapTToS = new Map();

    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];

        // 如果s中的字符已经映射过，并且与当前映射不符，则返回false
        if (mapSToT.has(sChar) && mapSToT.get(sChar) !== tChar) {
            return false;
        }
        console.log(`mapSToT: ${mapSToT.get(sChar)}`)
        if (mapTToS.has(tChar) && mapTToS.get(tChar) !== sChar) {
            return false;
        }
        console.log(`mapTToS: ${mapTToS.get(sChar)}`)
        console.log(`i: ${i}, sChar: ${sChar}, tChar: ${tChar}`)
        // 否则，将两个字符的映射关系存入哈希表
        mapSToT.set(sChar, tChar);
        mapTToS.set(tChar, sChar);
    }
    return true;
};


// 测试用例
console.log(isIsomorphic("egg", "add")); // 输出: true
// console.log(isIsomorphic("foo", "bar")); // 输出: false
// console.log(isIsomorphic("paper", "title")); // 输出: true