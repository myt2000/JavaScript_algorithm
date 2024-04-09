/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
/**
 * 访问节点的顺序是根节点-左子树-右子树 
 * 
*/
class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children ? children : [];
    }
}

// var preorder = function (root) {
//     let node;
//     let res = [];
//     if (!root) return res;
//     let stack = [root];

//     while (stack.length > 0) {
//         node = stack.pop();
//         res.push(node.val)
//         // 实际node节点children数组例如[3,2,4], 但是前序遍历是先访问左节点然后右节点，所以这里需要reverse一下，变为[4,2,3], 这样pop弹出的就是左边第一个节点
//         stack = stack.concat(node.children.reverse());
//     }
//     return res;
// };


// 数组构建成N叉树，可以完整构造N叉树
function buildTree(arr) {
    if (!arr || arr.length === 0) return null;

    let nodes = [];
    let index = 0;
    let nullNum = 0;
    let node;
    // 创建节点
    while (index < arr.length) {
        if (arr[index] !== null) {
            let childNode = new Node(arr[index]);
            if (nodes.length && nullNum) {
                node = nodes[nullNum - 1];
                node.children.push(childNode);
            }
            nodes.push(childNode);
            index++;
        } else {
            nullNum++;
            index++;
        }
    }
    return nodes.shift()
}

// leetcode最优解
var preorder = function (root) {
    let res = [];

    const dfs = function (root) {
        if (root == null) {
            return;
        }
        let head = root;
        res.push(head.val);
        for (child of head.children) {
            dfs(child);
        }

    }
    dfs(root);
    return res;
};


// 示例1
let array1 = [1, null, 3, 2, 4, null, 5, 6];
let root1 = buildTree(array1);
console.log(preorder(root1));   // [1,3,5,6,2,4]


let array2 = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]
let root2 = buildTree(array2);
console.log(preorder(root2));   // [1,2,3,6,7,11,14,4,8,12,5,9,13,10]


// 递归解法
// var preorder = function (root) {
//     let res = []

//     function traverse(root) {
//         if (root === null) {
//             return res
//         }

//         res.push(root.val)
//         for (let i = 0, len = root.children.length; i < len; i++) {
//             traverse(root.children[i])
//         }
//     }

//     traverse(root)

//     return res
// };


