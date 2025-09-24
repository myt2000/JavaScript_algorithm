class Solution {
    private fun getValue(c:Char):Int = when(c) {
        'I' -> 1
        'V' -> 5
        'X' -> 10
        'L' -> 50
        'C' -> 100
        'D' -> 500
        'M' -> 1000
        else -> throw UnsupportedOperationException("不支持的字符: $c")
    }


    fun romanToInt(s: String): Int {
        var result = 0
        var prevValue = 0
        
        s.forEach { char ->
            val currentValue = getValue(char)
            if (currentValue > prevValue) {
                // 当前值大于前一个值，说明是特殊情况（如IV、IX等）
                // 需要减去之前加过的前一个值，然后加上（当前值-前一个值）
                result += currentValue - 2 * prevValue
            } else {
                // 正常情况，直接加上当前值
                result += currentValue
            }
            prevValue = currentValue
        }
        
        return result
    }
}
// fun main{
// print(Solution().romanToInt("III"))
// print(Solution().romanToInt("IV"))
// print(Solution().romanToInt("IX"))
// print(Solution().romanToInt("LVIII"))
// print(Solution().romanToInt("MCMXCIV"))
// }

val result = Solution().romanToInt("III")
print(result)