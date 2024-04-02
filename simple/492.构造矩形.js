/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    const sqrt = Math.sqrt(area)
    let length = Math.floor(sqrt)
    // 从初始长度开始循环，找到能够整除面积的值作为长度
    while (area % length !== 0) {
        length--
    }
    // 计算宽度
    const width = area / length;
    return [Math.max(length, width), Math.min(length, width)]
};


console.log(constructRectangle(4))
console.log(constructRectangle(37))
console.log(constructRectangle(122122))