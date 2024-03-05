/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let lenA = 0, lenB = 0;
    let nodeA = headA, nodeB = headB;

    // 计算链A和链表B的长度
    while (nodeB !== null) {
        lenB++;
        nodeB = nodeB.next;
    }

    while (nodeA !== null) {
        lenA++;
        nodeA = nodeA.next;
    }
    // 将较长链表的头结点向后移动使两者对齐
    nodeA = headA;
    nodeB = headB;
    while (lenA > lenB) {
        nodeA = nodeA.next;
        lenA--;
    }

    while (lenB > lenA) {
        nodeB = nodeB.next;
        lenB--;
    }


    // 同时遍历两个链表查到找到橡胶垫或结束
    while (nodeA !== null && nodeB !== null) {
        if (nodeA === nodeB) {
            return nodeA;   // 找到了相交节点
        }
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }

    // 如果没有找到相交节点，则返回null
    return null;
};

// 首先定义链表节点结构
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// 创建两个相交链表，模拟示例1的情况
let listA = new ListNode(4, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5)))));
let listB = new ListNode(5, new ListNode(6, new ListNode(1, listA.next.next))); // 注意这里使链表B与链表A在值为8的节点处相交

// 调用函数并输出结果
let intersectNode = getIntersectionNode(listA, listB);
if (intersectNode !== null) {
    console.log('Intersected at \'' + intersectNode.val + '\'');
} else {
    console.log('The two lists do not intersect');
}

// 对于示例2和示例3，可以创建对应的链表结构并调用函数进行测试