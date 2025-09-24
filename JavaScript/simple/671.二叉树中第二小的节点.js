/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


var findSecondMinimumValue = function (root) {
    let min = root.val;
    let secondMin = Infinity;
    function dfs(node) {
        if (node.val > min && node.val < secondMin) {
            secondMin = node.val;
        }
        if (node.left) {
            dfs(node.left);
        }
        if (node.right) {
            dfs(node.right);
        }
    }
    dfs(root);
    return secondMin === Infinity ? -1 : secondMin;
};


// 构建二叉树的辅助函数, 这个可以剔除中间有null的数组, 优化了代码value !== null
function buildTree(nums) {
    if (!nums.length) return null;
    // 创建根节点
    let root = new TreeNode(nums.shift());
    let queue = [root]; // 最多有两个节点，左右节点
    // 循环队列，直到队列为空或者数组为空
    while (queue.length && nums.length) {
        let node = queue.shift();
        if (nums.length) {
            const value = nums.shift();
            if (value !== null) {
                node.left = new TreeNode(value);
                // 左节点放入queue
                queue.push(node.left);
            }
        }
        if (nums.length) {
            const value = nums.shift();
            if (value !== null) {
                node.right = new TreeNode(value);
                // 右节点放入queue
                queue.push(node.right);
            }

        }
    }
    return root;
}



let array1 = [2, 2, 5, null, null, 5, 7];
let root1 = buildTree(array1);
console.log(findSecondMinimumValue(root1));


let array2 = [2, 2, 2];
let root2 = buildTree(array2);
console.log(findSecondMinimumValue(root2));


// leetcode最优解
var findSecondMinimumValueBest = function (root) {
    const arr = [];
    (function traversal(root) {
        if (root) {
            arr.push(root.val)
            traversal(root.left)
            traversal(root.right)
        }
    })(root)
    const ans = [...new Set(arr)].sort();
    return ans[1] ? ans[1] : -1;
};