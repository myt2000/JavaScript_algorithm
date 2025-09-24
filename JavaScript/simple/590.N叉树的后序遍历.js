/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// 后序遍历  左子树->右子树->根节点


class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children ? children : [];
    }
}

var postorder = function (root) {
    if (!root) {
        return [];
    }

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        // 由于是后序遍历， 要按照左子树->右子树->根节点，但我们只能从根节点访问，所以倒序插入数组，即可得到答案
        result.unshift(node.val); // 将节点值插入结果数组的开头
        // 将子节点依次入栈，保证从左到右处理
        for (const child of node.children) {
            stack.push(child);
        }
    }
    return result;
};


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

// 示例1
let array1 = [1, null, 3, 2, 4, null, 5, 6];
let root1 = buildTree(array1);
console.log(postorder(root1))   // [5,6,3,2,4,1]

// 示例2
let array2 = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14];
let root2 = buildTree(array2);
console.log(postorder(root2))   // [2,6,14,11,7,3,12,8,4,13,9,10,5,1]


// leetcode 递归解法
// var postorder = function (root) {
//     let ans = [];
//     const func = (root) => {
//         if (!root) {
//             return;
//         }

//         for (let child of root.children) {
//             func(child);
//         }
//         ans.push(root.val);
//     }
//     func(root);
//     return ans;
// };