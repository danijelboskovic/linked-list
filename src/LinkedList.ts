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

    deleteNode(data: T): void {
        if (this.head === undefined) return;
        if (this.head.data === data) {
            this.head = this.head.next;
        }

        let iterator = this.head;

        while (iterator) {
            if (iterator.next?.data === data) {
                iterator.next = iterator.next.next;
            }

            iterator = iterator.next;
        }


    }

    traverse(): T[] {
        const result: T[] = [];

        let iterator = this.head;

        while (iterator) {
            result.push(iterator.data);
            iterator = iterator.next;
        }

        return  result;
    }

    size(): number {
        let iterator = this.head;
        let size = 0;

        while (iterator) {
            size++;
            iterator = iterator.next;
        }

        return size;
    }
    
    search(comparator: (data: T) => boolean): Node<T> | null {
        let iterator = this.head;
        let result: Node<T> | null = null;

        while (iterator) {
            if (comparator(iterator.data)) {
                result = iterator;
                break;
            }

            iterator = iterator.next;
        }

        return result;
    }
}