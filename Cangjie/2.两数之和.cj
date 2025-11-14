// 定义两数之和函数
func twoSum(nums: Array<Int64>, target: Int64): Array<Int64> {
    // 使用for-in遍历数组
    for(i in 0..nums.size-1) {
        for(j in i+1..nums.size-1) {
            if(nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
    // 如果没有找到，返回空数组
    return []
}

// 主函数
main() {
    // 示例调用
    let nums: Array<Int64> = [2, 7, 11, 15]
    let target: Int64 = 9
    let result: Array<Int64> = twoSum(nums, target)
    println(result)
}