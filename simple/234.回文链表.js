/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//     if (!head || !head.next) return true;
//     // 快慢指针找到中点
//     // 这里利用了相对位移，来确定位置，slow每次移动一下，fast每次移动2下，这样slow刚好走到中间，fast走到最后
//     // 如果链表的长度是偶数，则 fast 会在 slow 到达中间节点之后，在下一次迭代中到达链表末尾，此时 slow 已经经过了真正的中间点，但仍然是靠近中间的一个节点。 
//     let slow = head, fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         // console.log(`slow: ${slow.val}`)
//         // console.log(`slow.next: ${slow.next.val}`)
//         fast = fast.next.next;
//     }

//     // 反转后半部分链表
//     let prev = null;
//     let curr = slow;
//     while (curr) {
//         let nextTemp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = nextTemp;
//     }

//     // 比较前半部分和反转后的后半部分是否相等
//     let left = head;
//     let right = prev;
//     while (left && right) {
//         if (left.val !== right.val) return false;
//         left = left.next;
//         right = right.next;
//     }

//     return true;
// };


// 最优解
var isPalindrome = function (head) {
    let slow = head
    let fast = head
    let prev = null;
    while (fast && fast.next) {
        fast = fast.next.next
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next
    }
    if (fast) {
        slow = slow.next
    }
    while (prev && slow) {
        if (prev.val !== slow.val) {
            return false
        }
        prev = prev.next
        slow = slow.next
    }
    return true
};


// 首先定义链表节点类
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// 创建测试用例：示例1，回文链表 [1,2,2,1]
let head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1, null)))));
console.log(isPalindrome(head1)); // 输出应为 true

// 创建测试用例：示例2，非回文链表 [1,2]
let head2 = new ListNode(1, new ListNode(2, null));
console.log(isPalindrome(head2)); // 输出应为 false