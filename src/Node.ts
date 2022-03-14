export class Node<T> {
    public data: T;
    public next?: Node<T>;


    constructor(data: T) {
        this.data = data;
    }
}