package Java.simple;

import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;
// 定义一个HashMap，然后判断当前字符是否小于下一个字符，如果是，就减去当前字符的值，否则加上当前字符的值
class Solution {
    Map<Character, Integer> symbolValues = new HashMap<Character, Integer>() {{
        put('I', 1);
        put('V', 5);
        put('X', 10);
        put('L', 50);
        put('C', 100);
        put('D', 500);
        put('M', 1000);
    }};

    public int romanToInt(String s) {
        int ans = 0;
        int n = s.length();
        for (int i = 0; i < n; ++i) {
            int value = symbolValues.get(s.charAt(i));
            if (i < n - 1 && value < symbolValues.get(s.charAt(i + 1))) {
                ans -= value;
            } else {
                ans += value;
            }
        }
        return ans;
    }


    public static void main(String[] args) {
        Solution solution = new Solution();
        int ans = solution.romanToInt("III");
        System.out.println(ans);
        ans = solution.romanToInt("IV");
        System.out.println(ans);
        ans = solution.romanToInt("IX");
        System.out.println(ans);
        ans = solution.romanToInt("LVIII");
        System.out.println(ans);
        ans = solution.romanToInt("MCMXCIV");
        System.out.println(ans);
        Object[] array = solution.symbolValues.entrySet().toArray();
        System.err.println(Arrays.toString(array));    // [C=100, D=500, V=5, X=10, I=1, L=50, M=1000]
    }
}


