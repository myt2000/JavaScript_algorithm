/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function postorderTraversal(root) {
    if (!root) { // 如果根节点为空，则直接返回空数组
        return [];
    }

    let result = []; // 初始化结果数组

    function traverse(node) {
        // 后序遍历：先遍历左子树，再遍历右子树，最后访问根节点
        if (node.left) { // 如果存在左子树，则递归遍历左子树
            traverse(node.left);
        }
        if (node.right) { // 如果存在右子树，则递归遍历右子树
            traverse(node.right);
        }
        result.push(node.val); // 访问当前节点（在左右子树都遍历完之后）
    }

    traverse(root); // 从根节点开始遍历

    return result; // 返回结果数组
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(postorderTraversal(root)); // 输出：[1, 2, 3]