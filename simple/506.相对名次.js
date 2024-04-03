/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const medal = { 1: "Gold Medal", 2: "Silver Medal", 3: "Bronze Medal" }
    let res = new Array(score.length).fill(0);
    for (let i = 0; i < score.length; i++) {
        const max = Math.max(...score);
        const index = score.indexOf(max);
        score[index] = -1;
        if (medal[i + 1]) { res[index] = medal[i + 1] }
        else { res[index] = (i + 1) + "" }
    }
    return res
};

// console.log(findRelativeRanks([5, 4, 3, 2, 1]))
// console.log(findRelativeRanks([10, 3, 8, 9, 4]))
console.log(findRelativeRanks([123123, 11921, 1, 0, 123]))


var findRelativeRanksBest = function (score) {
    let map = score.toSorted((a, b) => b - a).reduce((a, b, c) => {
        if (c === 0) c = 'Gold Medal'
        else if (c === 1) c = 'Silver Medal'
        else if (c === 2) c = 'Bronze Medal'
        else c = `${c + 1}`
        a[b] = c
        return a
    }, {})
    return score.map(v => map[v])
};