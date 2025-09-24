/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let countPosionedTime = 0;
    for (let i = 0; i < timeSeries.length - 1; i++) {
        countPosionedTime += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }
    return countPosionedTime + duration;
};


console.log(findPoisonedDuration([1, 4], 2))
console.log(findPoisonedDuration([1, 2], 2))