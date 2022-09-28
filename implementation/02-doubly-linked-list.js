// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val)

        this.length++
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return this;
        }

        if (this.tail) {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            return this;
        }

    }

    removeFromHead() {
        if (!this.head) return undefined

        let curr = this.head; //storing the value of original head

        this.head = curr.next

        if (this.head) {
            this.head.prev = null
        }

        this.length--

        return curr.value
    }

    removeFromTail() {
        if (!this.head) return;

        let curr = this.tail;
        this.tail = curr.prev;

        if (this.tail) {
            this.tail.next = null;
        }
        this.length--;
        return curr.value
    }

    peekAtHead() {
        if (!this.head) return;
        return this.head.value
    }

    peekAtTail() {
        if (!this.head) return;
        return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
