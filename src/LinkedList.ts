import { ILinkedList } from "./ILinkedList";
import { Node } from "./Node";

export class LinkedList<T> implements ILinkedList<T> {
    insertInBegin(data: T): void {
        throw new Error("Method not implemented.");
    }
    insertAtEnd(data: T): void {
        throw new Error("Method not implemented.");
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