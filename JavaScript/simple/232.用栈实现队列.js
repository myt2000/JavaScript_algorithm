// class MyQueue {
//     constructor() {
//         this.stack1 = []; // 用于存储队列元素的栈
//         this.stack2 = []; // 临时辅助栈
//     }

//     // 将元素 x 推到队列末尾
//     push(x) {
//         // 先将 stack1 中的所有元素弹出并压入 stack2
//         while (this.stack1.length > 0) {
//             this.stack2.push(this.stack1.pop());
//         }
//         // 将新元素 x 压入 stack1
//         this.stack1.push(x);
//         // 再将 stack2 中的元素依次弹出并压回 stack1，以保持原队列顺序
//         while (this.stack2.length > 0) {
//             this.stack1.push(this.stack2.pop());
//         }
//     }

//     // 从队列开头移除并返回元素
//     pop() {
//         if (this.empty()) {
//             return null;
//         }
//         // 直接弹出 stack1 的顶部元素即可
//         return this.stack1.pop();
//     }

//     // 返回队列开头的元素
//     peek() {
//         if (this.empty()) {
//             return null;
//         }
//         // stack1 的顶部元素即为队列开头的元素
//         return this.stack1[this.stack1.length - 1];
//     }

//     // 判断队列是否为空
//     empty() {
//         // 如果 stack1 为空，则队列为空
//         return this.stack1.length === 0;
//     }
// }


// 最优解
class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    push(x) {
        this.inStack.push(x);
    }

    pop() {
        if (!this.outStack.length) {
            this.in2out();
        }
        return this.outStack.pop();
    }

    peek() {
        if (!this.outStack.length) {
            this.in2out();
        }
        return this.outStack[this.outStack.length - 1];
    }

    empty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

    in2out() {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
}


// 示例测试
let myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.push(3);
console.log(myQueue.peek()); // 输出：1
console.log(myQueue.pop()); // 输出：1, queue is: [2]
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log(myQueue.empty()); // 输出：false