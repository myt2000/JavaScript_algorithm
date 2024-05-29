/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    let temp = s;
    if (s.length !== goal.length) return false;
    for (let i = 0; i < temp.length; i++) {
        temp = temp.slice(1) + temp[0];
        if (temp === goal) return true;
    }
    return false;
};


console.log(rotateString("abcde", "cdeab"))
console.log(rotateString("abcde", "abced"))

// 最佳思路
var rotateStringBest = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    let doubles = s + s;
    return doubles.includes(goal);
};