/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var removeElements = function (head, val) {
    // 创建一个哑节点（dummy node）, 用于简化边界条件
    let dummyNode = new ListNode(0);
    dummyNode.next = head;

    // 定义指针prev和curr
    let prev = dummyNode;
    let curr = head;

    while (curr !== null) {
        if (curr.val === val) {
            // 如果当前节点值等于val，就将prev指向curr的下一个节点，从而删除curr节点
            prev.next = curr.next;
        } else {
            // 如果当前节点值不等于val，就让prev前进到curr的位置
            prev = curr;
        }
        // 让curr始终向前移动
        curr = curr.next;
    }
    // 返回新的头结点，即dummy_node的下一个节点
    return dummyNode.next;

};


// 示例用法
let head = new ListNode(1,
    new ListNode(2,
        new ListNode(6,
            new ListNode(3,
                new ListNode(4,
                    new ListNode(5,
                        new ListNode(6)
                    )
                )
            )
        )
    )
);

let newHead = removeElements(head, 6);
console.log(newHead);