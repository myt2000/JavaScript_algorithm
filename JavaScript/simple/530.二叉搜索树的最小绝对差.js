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

/**
 * 中序遍历二叉搜索树，将节点值按照从小到大的顺序存储到数组中。
 * 遍历数组，计算相邻节点值之间的差值，并找到最小的差值。
 * 返回最小的差值。
*/
// 中序遍历
var getMinimumDifference = function (root) {
    let prev = null; // 用于存储前一个节点的值
    let minDiff = Infinity; // 初始化最小差值为无穷大
    const inorderTraversal = (node) => {
        if (node === null) return;
        inorderTraversal(node.left);
        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev); // 更新最小差值
        }
        prev = node.val; // 更新前一个节点的值
        inorderTraversal(node.right);
    };
    inorderTraversal(root);
    return minDiff;
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


// 现在使用这个修复后的构建函数创建完全二叉树，并计算节点数
let array1 = [4, 2, 6, 1, 3]; // 注意：这个数组可以构造一棵完全二叉树
let root1 = buildTree(array1);
console.log(getMinimumDifference(root1)); // 应输出：1


let array2 = [1, 0, 48, null, null, 12, 49];
let root2 = buildTree(array2);
console.log(getMinimumDifference(root2));   // 应输出：1
