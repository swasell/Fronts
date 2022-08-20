class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        var newSLL = new SLLNode(value);
        newSLL.next = this.head;
        this.head = newSLL;
        return this;
    }

    removeFront() {
        if(!this.head) {
            return this.head;
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }

    front() {
        if (this.head == null) {
            return null;
        } else {
        return this.head.value;
    }
}
}

var SLL1 = new SLL();

SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
console.log(SLL1);

SLL1.removeFront();
console.log(SLL1);
