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
 * @return {boolean}
 */
var isBalanced = function (root) {
    function depth(node) {
        if (!node) {
            return 0;
        }

        const leftDepth = depth(node.left);
        if (leftDepth === -1) {
            return -1;
        }
        const rightDepth = depth(node.right);
        if (rightDepth === -1) {
            return -1;
        }
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1;  // 差距超过1，说明不平衡
        }
        return Math.max(leftDepth, rightDepth) + 1; // 返回当前节点的深度
    }
    return depth(root) !== -1; // 如果整棵树的最大平衡高度不为-1， 则表示树是平衡的
};