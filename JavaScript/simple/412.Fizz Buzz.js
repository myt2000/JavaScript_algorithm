/**
 * @param {number} n
 * @return {string[]}
 */
// 这道题感觉非常简单，生成对应数组，或者直接用n也可以
var fizzBuzz = function (n) {
    let aar = Array.from({ length: n }, (_, i) => i + 1);
    for (let i = 0; i < n; i++) {
        if (aar[i] % 3 === 0 && aar[i] % 5 === 0) {
            aar[i] = "FizzBuzz";
        } else if (aar[i] % 3 === 0) {
            aar[i] = "Fizz";
        }
        else if (aar[i] % 5 === 0) {
            aar[i] = "Buzz";
        }
        else {
            aar[i] = aar[i].toString();
        }
    }
    return aar;
};


console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))


var fizzBuzzBest = function (n) {
    const ans = []
    for (let i = 1; i <= n; i++) {

        let str = ""
        if (i % 3 === 0) {
            str = "Fizz"
        }
        if (i % 5 === 0) {
            str += "Buzz"
        }
        if (!str) str = i + ""
        ans.push(str)
    }
    return ans
};