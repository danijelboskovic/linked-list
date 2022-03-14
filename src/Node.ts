export class Node<T> {
    public data: T;
    public next?: Node<T>;


    constructor(data: T, next?: Node<T>) {
        this.data = data;
        this.next = next;
    }
}