/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let wordMap = new Map();
    let sArray = s.split(' ');
    if (pattern.length !== sArray.length) return false;
    for (let i = 0; i < pattern.length; i++) {
        if (wordMap.has(pattern[i])) {
            if (wordMap.get(pattern[i]) !== sArray[i]) {
                return false;
            }
        } else {
            wordMap.set(pattern[i], sArray[i]);
        }
    }
    const wrodSet = new Set(wordMap.values());
    return wrodSet.size === wordMap.size;
};

console.log(wordPattern("abba", "dog cat cat dog"))
// console.log(wordPattern("abba", "dog cat cat fish"))
// console.log(wordPattern("aaaa", "dog cat cat dog"))
// console.log(wordPattern("abba", "dog dog dog dog"))


// 最优解，双map，互相映射
var wordPatternBest = function (pattern, s) {
    var p_map = new Map();
    var s_map = new Map();
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    for (var i = 0; i < words.length; i++) {
        var p = pattern[i];
        var w = words[i];
        if (p_map.has(p) && p_map.get(p) !== w || s_map.has(w) && s_map.get(w) !== p) {
            return false;
        }
        p_map.set(p, w);
        s_map.set(w, p);
    }
    return true;
}; 