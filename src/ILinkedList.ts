import { Node } from "./Node";

export interface ILinkedList<T> {
    insertInBegin(data: T): void;
    insertAtEnd(data: T): void;
    deleteNode(data: T): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): Node<T> | null;
  }