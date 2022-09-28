const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        return this.length;
    }

    dequeue() {

        if (!this.head) return null

        let curr = this.head; //storing the value of original head
        this.head = curr.next

        if (!this.head) {
            this.tail = null
        }

        this.length--

        return curr.value

    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
