/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [1];
    } else if (rowIndex === 1) {
        return [1, 1]
    }
    let lastRow = [1, 1];
    for (let i = 2; i <= rowIndex; i++) {
        let currentRow = [1];
        for (let j = 1; j < i; j++) {
            currentRow.push(lastRow[j - 1] + lastRow[j])
        }
        currentRow.push(1);
        lastRow = currentRow;
    }
    return lastRow;

};


console.log(getRow(3))
console.log(getRow(0))
console.log(getRow(1))
