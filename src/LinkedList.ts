import { ILinkedList } from "./ILinkedList";
import { Node } from "./Node";

export class LinkedList<T> implements ILinkedList<T> {
    public head: Node<T> | undefined = undefined;

    constructor() {
    }

    insertInBegin(data: T): void {
        this.head = new Node<T>(data, this.head);
    }

    insertAtEnd(data: T): void {
        const node = new Node<T>(data);
        
        if (this.head === undefined) {
            this.head = node;
            return;
        }
        
        let iterator = this.head;

        while(iterator.next) {
            iterator = iterator.next;
        }

        iterator.next = node;

    }

    deleteNode(node: Node<T>): void {
        throw new Error("Method not implemented.");
    }

    traverse(): T[] {
        throw new Error("Method not implemented.");
    }

    size(): number {
        throw new Error("Method not implemented.");
    }
    
    search(comparator: (data: T) => boolean): Node<T> | null {
        throw new Error("Method not implemented.");
    }
}