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
 * @return {boolean}
 */


/**
 * 请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
 * 举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。
 * 如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
 * 如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。
*/
var leafSimilar = function (root1, root2) {
    let arr1 = [], arr2 = [];
    function dfs(root, arr) {
        if (!root) return;
        if (!root.left && !root.right) {
            arr.push(root.val);
            return;
        }
        dfs(root.left, arr);
        dfs(root.right, arr);
    }
    dfs(root1, arr1);
    dfs(root2, arr2);
    return arr1.join(',') === arr2.join(',');
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


let root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]
let tree1 = buildTree(root1);
let root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]
let tree2 = buildTree(root2);
console.log(leafSimilar(root1, root2));


root1 = [1, 2, 3]
tree1 = buildTree(root1);
root2 = [1, 3, 2]
tree2 = buildTree(root2);
console.log(leafSimilar(tree1, tree2));

root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 14];
tree1 = buildTree(root1);
root2 = [3, 5, 1, 6, 71, 4, 2, null, null, null, null, null, null, 9, 8]
tree2 = buildTree(root2);
console.log(leafSimilar(tree1, tree2))