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
var minDiffInBST = function (root) {
    const arr = [];
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    }
    dfs(root)
    return Math.min(...arr.slice(1).map((item, index) => item - arr[index]));
};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

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



console.log(minDiffInBST(buildTree([4, 2, 6, 1, 3])))
console.log(minDiffInBST(buildTree([1, 0, 48, null, null, 12, 49])))

// 最佳答案
var minDiffInBSTBest = function (root) {
    let min = Number.MAX_SAFE_INTEGER;
    let prev;
    // 使用中序遍历
    const inorder = (node) => {
        if (!node) return;
        inorder(node.left);
        if (prev != null) {
            min = Math.min(min, node.val - prev);
        }
        prev = node.val;
        inorder(node.right);
    }
    inorder(root);
    return min;
};