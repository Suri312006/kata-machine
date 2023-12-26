type Node<T> = {
    value: T,
    prev?: Node<T>
}
export default class Stack<T> {
    public length: number;
    private head?: Node<T>
    

    constructor() {
        this.length = 0
        this.head = undefined
    }


    push(item: T): void {
        this.length ++;

        const newNode = {
            value: item,
        } as Node<T>
        
        if(!this.head){
            this.head = newNode
            return;
        }
        newNode.prev = this.head
        this.head = newNode

}
    pop(): T | undefined {
        this.length = Math.max(0, this.length-1)
        if (this.length === 0){
            const head = this.head
            this.head = undefined
            return head?.value;
        }
        const prev_node = this.head
        this.head = this.head?.prev
        return prev_node?.value

}
    peek(): T | undefined {
        return this.head?.value

}
}