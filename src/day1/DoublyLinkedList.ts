type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    private debug() {
        let curr = this.head;
        let out = "";
        for (let i = 0; curr && i <= this.length; i++) {
            out += `${i} => ${curr.value}, `;
            curr = curr.next;
        }
        console.log(out);
    }

    prepend(item: T): void {
        const new_node = { value: item, next: this.head } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = new_node;
            return;
        } else {
            this.head.prev = new_node;
            this.head = new_node;
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("List shorter than specified index.");
        }

        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        let curr = this.get_at(idx) as Node<T>;
        const new_node = { value: item } as Node<T>;

        new_node.next = curr;

        new_node.prev = curr.prev;
        curr.prev = new_node;

        if (new_node.prev) {
            new_node.prev.next = curr;
        }
    }
    append(item: T): void {
        const new_node = { value: item } as Node<T>;
        this.length++;

        if (this.tail) {
            new_node.prev = this.tail;
            this.tail.next = new_node;
            this.tail = new_node;
            return;
        }

        this.head = this.tail = new_node;
        return;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }

            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }

        //now here curr is where the value == the thing
        return this.remove_node(curr);
    }
    get(idx: number): T | undefined {
        const node = this.get_at(idx);
        return node?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.get_at(idx);

        if (!node) {
            return undefined;
        }

        return this.remove_node(node);
    }
    private remove_node(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const val = this.head?.value;
            this.tail = this.head = undefined;

            return val;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        node.next = node.prev = undefined;

        return node.value;
    }
    private get_at(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    }
}
