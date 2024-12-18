/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let fiveDollar = 0, tenDollar = 0;

    for (let bill of bills) {
        if (bill === 5) {
            fiveDollar++; // 收到5美元，无需找零
        } else if (bill === 10) {
            if (fiveDollar === 0) return false; // 没有5美元找零
            fiveDollar--; // 使用一个5美元找零
            tenDollar++; // 收到10美元
        } else { // bill === 20
            // 尝试使用一个10美元和一个5美元找零
            if (tenDollar > 0 && fiveDollar > 0) {
                tenDollar--;
                fiveDollar--;
            } else if (fiveDollar >= 3) { // 或者使用三个5美元找零
                fiveDollar -= 3;
            } else {
                return false; // 无法正确找零
            }
        }
        // 如果5美元数量变为负数，说明无法找零
        if (fiveDollar < 0) return false;
    }

    return true; // 所有顾客都成功找零

};

console.log(lemonadeChange([5, 5, 5, 10, 20]));

console.log(lemonadeChange([5, 5, 10, 10, 20]));