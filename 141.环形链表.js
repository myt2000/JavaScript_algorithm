/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false; // 两个空节点，肯定没有环
    }
    let slow = head;
    let fast = head;

    // 使快指针每次移动两步，慢指针每次移动一步
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        // 如果快慢指针相遇，则说明链表中存在环
        if (slow === fast) {
            return true;
        }
    }
    return false;
};

// 定义链表节点结构
function ListNode(val, next = null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 初始化示例链表
function createLinkedListWithCycle(arr, pos) {
    let dummy = new ListNode();
    let current = dummy;
    let cycleStart = null;

    for (let i = 0; i < arr.length; i++) {
        let newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = newNode;

        if (i === pos) {
            cycleStart = newNode;
        }
    }

    // 创建环
    if (cycleStart !== null) {
        while (current.next !== null) {
            current = current.next;
        }
        current.next = cycleStart;
    }

    return dummy.next;
}


// 调用示例
let head1 = createLinkedListWithCycle([3, 2, 0, -4], 1); // 带环链表，环从第二个节点开始
console.log(hasCycle(head1)); // 输出：true

let head2 = createLinkedListWithCycle([1, 2], 0); // 带环链表，环从第一个节点开始
console.log(hasCycle(head2)); // 输出：true

let head3 = createLinkedListWithCycle([1]); // 不带环链表
console.log(hasCycle(head3)); // 输出：false