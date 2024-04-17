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