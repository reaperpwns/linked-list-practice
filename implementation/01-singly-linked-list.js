// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val)

        newNode.next = this.head
        this.head = newNode

        this.length++

        return this

    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        this.length++
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;


        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (!this.head) return undefined;
        let orgHead = this.head;
        this.head = orgHead.next;
        this.length--;
        return orgHead;
    }

    removeFromTail() {
        if (!this.head) return undefined;
        let curr = this.head;
        let prev;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        if (!prev) {
            this.head = null;
        } else {
            prev.next = null;
        }
        this.length--;
        return curr;
    }

    peekAtHead() {
        // Return value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
