import std.collection.HashMap
// 两数之和解法
class Solution1 {
    func twoSum(nums: Array<Int64>, target: Int64) {
        // 定义一个HashMap(哈希表)， 键和值都是Int64类型
        var map = HashMap<Int64, Int64>()
        // 定义一个整数i, 用作循环变量， 表示当前遍历的数组下标
        for(i in 0..nums.size){
            var diff = target - nums[i]
            if (map.contains(diff)) {
                var a:Array<Int64> = [map[diff], i]
                return a
            }
            else {
                map.add(nums[i], i)
            }
        }
        var a:Array<Int64> = []
        return a
    }
}

// 主函数
main() {
    let nums1: Array<Int64> = [2, 7, 11, 15]
    let target1: Int64 = 9
    // 创建解决方案实例
    let solution = Solution1()
    // 调用两数之和方法
    // println("查找两数之和为9的索引...")
    let result =solution.twoSum(nums1, target1)
    println(result)
}

