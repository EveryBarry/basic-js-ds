const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
//FIXME
class Queue {
  constructor() {
    this.curr = null;
    this.next = null;
  }

  getUnderlyingList() {
    return this.curr;
  }

  enqueue(value) {
    if (this.curr) {
      let newNode = new ListNode(value);
      this.next.next = newNode;
      this.next = newNode;
    } else {
      this.curr = new ListNode(value);
      this.next = this.curr;
    }
  }

  dequeue() {
    let out = this.curr.value;
    this.curr = this.curr.next;
    return out;
  }
}

module.exports = {
  Queue
};
