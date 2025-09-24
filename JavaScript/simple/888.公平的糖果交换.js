/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */

/**
 * 爱丽丝和鲍勃拥有不同总数量的糖果。给你两个数组 aliceSizes 和 bobSizes ，aliceSizes[i] 是爱丽丝拥有的第 i 盒糖果中的糖果数量，bobSizes[j] 是鲍勃拥有的第 j 盒糖果中的糖果数量。
 * 两人想要互相交换一盒糖果，这样在交换之后，他们就可以拥有相同总数量的糖果。一个人拥有的糖果总数量是他们每盒糖果数量的总和。
 * 返回一个整数数组 answer，其中 answer[0] 是爱丽丝必须交换的糖果盒中的糖果的数目，answer[1] 是鲍勃必须交换的糖果盒中的糖果的数目。如果存在多个答案，你可以返回其中 任何一个 。题目测试用例保证存在与输入对应的答案。
*/
var fairCandySwap = function (aliceSizes, bobSizes) {
    // 计算爱丽丝和鲍勃的糖果总数量
    // reduce里面acc是累加器，cur是当前值，初始值为0
    const sumAlice = aliceSizes.reduce((acc, cur) => acc + cur, 0);
    const sumBob = bobSizes.reduce((acc, cur) => acc + cur, 0);

    // 计算交换后应拥有的糖果数量
    const target = (sumAlice + sumBob) / 2;

    // 创建一个 Set 来存储鲍勃的糖果盒子数量
    const setBob = new Set(bobSizes);

    // 寻找合适的交换
    for (let a of aliceSizes) {
        const needed = a - (sumAlice - target);
        if (setBob.has(needed)) {
            return [a, needed];
        }
    }

    // 如果没有找到合适的交换，返回空数组（根据题设，这种情况不会发生）
    return [];
};


// 示例使用
const aliceSizes = [1, 1];
const bobSizes = [2, 2];
console.log(fairCandySwap(aliceSizes, bobSizes)); // 输出: [1, 2]

const aliceSizes2 = [1, 2];
const bobSizes2 = [2, 3];
console.log(fairCandySwap(aliceSizes2, bobSizes2)); // 输出可能为: [1, 2] 或其他有效答案

const aliceSizes3 = [2];
const bobSizes3 = [1, 3];
console.log(fairCandySwap(aliceSizes3, bobSizes3)); // 输出: [2, 3]