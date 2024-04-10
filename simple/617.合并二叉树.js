/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


var mergeTrees = function (root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
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




console.log(mergeTrees(buildTree([1, 3, 2, 5]), buildTree([2, 1, 3, null, 4, null, 7])));
console.log(mergeTrees(buildTree([1]), buildTree([1, null, 2])));