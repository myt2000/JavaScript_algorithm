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

// 用递归的方式计算树的直径，即
var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;

    const dfs = (node) => {
        if (!node) return 0;

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

        return Math.max(leftDepth, rightDepth) + 1;
    };

    dfs(root);

    return maxDiameter;
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



let array1 = [1, 2, 3, 4, 5]; // 注意：这个数组可以构造一棵完全二叉树
let root1 = buildTree(array1);
console.log(diameterOfBinaryTree(root1)); // 应输出：1


let array2 = [1, 2];
let root2 = buildTree(array2);
console.log(diameterOfBinaryTree(root2));   // 应输出：1