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
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var sumOfLeftLeaves = function (root) {
    if (!root) return 0;
    let sum = 0;
    var dfs = function (node, isLeft) {
        if (!node) return;
        if (isLeft && !node.left && !node.right) {
            sum += node.val;
        }
        dfs(node.left, true);
        dfs(node.right, false);
    }
    dfs(root, false);
    return sum;
};


// 构建二叉树的辅助函数, 这个可以剔除中间有null的数组
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
            if (value) {
                node.left = new TreeNode(value);
                // 左节点放入queue
                queue.push(node.left);
            }
        }
        if (nums.length) {
            const value = nums.shift();
            if (value) {
                node.right = new TreeNode(value);
                // 右节点放入queue
                queue.push(node.right);
            }

        }
    }
    return root;
}


// 现在使用这个修复后的构建函数创建完全二叉树，并计算节点数
let array = [3, 9, 20, null, null, 15, 7]; // 注意：这个数组可以构造一棵完全二叉树
let root = buildTree(array);
console.log(sumOfLeftLeaves(root)); // 应输出：6