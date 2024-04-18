/**
 * @param {number} k
 * @param {number[]} nums
 */

/**
 * 这道题要求实现一个数据结构，能够实时找到数据流中第 k 大的元素。为了解决这个问题，我们可以使用一个最小堆（Min Heap）来存储数据流中的前 k 大元素，其中堆顶元素即为第 k 大元素。
 * 具体实现时，我们维护一个大小为 k 的最小堆，每次向堆中添加新元素时，如果堆的大小小于 k，则直接将新元素加入堆中；
 * 如果堆的大小已经达到 k，则比较新元素与堆顶元素的大小关系，如果新元素大于堆顶元素，则将堆顶元素弹出，然后将新元素加入堆中，保持堆的大小为 k。
*/
class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = [];
        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        console.log(`this.minHeap: ${this.minHeap}, val: ${val}`)
        if (this.minHeap.length < this.k) {
            this.minHeap.push(val);
            this.minHeap.sort((a, b) => a - b);
        } else if (val > this.minHeap[0]) {
            this.minHeap.shift();
            this.minHeap.push(val);
            this.minHeap.sort((a, b) => a - b);
        }
        return this.minHeap[0];
    }
}

// 示例
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));  // 返回 4
console.log(kthLargest.add(5));  // 返回 5
console.log(kthLargest.add(10)); // 返回 5
console.log(kthLargest.add(9));  // 返回 8
console.log(kthLargest.add(4));  // 返回 8

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */





//leetcode最优解
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k
    this.heap = new MinHeap()
    for (const x of nums) {
        this.add(x)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.offer(val)
    if (this.heap.size() > this.k) {
        this.heap.poll()
    }
    return this.heap.peek()
};





class MinHeap {
    constructor(data = []) {
        this.data = data
        this.comparator = (a, b) => a - b
        this.heapify()
    }
    heapify() {
        if (this.size() < 2) return
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i)
        }
    }
    peek() {
        if (this.size() === 0) return null
        return this.data[0]
    }
    offer(value) {
        this.data.push(value)
        this.bubbleUp(this.size() - 1)
    }
    poll() {
        if (this.size() === 0) {
            return null
        }
        const result = this.data[0]
        const last = this.data.pop()
        if (this.size() !== 0) {
            this.data[0] = last
            this.bubbleDown(0)
        }
        return result
    }
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex)
                index = parentIndex
            } else {
                break
            }
        }
    }
    bubbleDown(index) {
        const lastIndex = this.size() - 1
        while (true) {
            const leftIndex = index * 2 + 1
            const rightIndex = index * 2 + 2
            let findIndex = index
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex
            }
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex
            }
            if (index !== findIndex) {
                this.swap(index, findIndex)
                index = findIndex
            } else {
                break;
            }
        }
    }
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]]
    }
    size() {
        return this.data.length
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */