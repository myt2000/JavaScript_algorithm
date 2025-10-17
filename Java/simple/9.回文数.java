package Java.simple;

class Solution9 {
    public boolean isPalindrome(int x) {
        if (x<0) {
            return false;
        }
        StringBuilder s = new StringBuilder(Integer.toString(x));
        StringBuilder reversed = new StringBuilder(s).reverse();
        return s.toString().equals(reversed.toString());
    }

    public static void main(String[] args) {
        Solution9 s = new Solution9();
        int a1 = 10;
        boolean result = s.isPalindrome(a1);
        System.out.println(result);
        // return result;
    }
}


