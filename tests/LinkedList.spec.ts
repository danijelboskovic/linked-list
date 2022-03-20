import { LinkedList } from "../src/LinkedList";
import {Node} from "../src/Node";

describe("insertInBegin", () => {
    it("should insert in the beginning when list is empty", () => {
        const linkedList = new LinkedList<number>();
        linkedList.insertInBegin(13);

        expect(linkedList.head?.data).toBe(13);
        expect(linkedList.head?.next).toBe(undefined);
    });

    it("should insert in the beginning when list is not empty", () => {
        const linkedList = new LinkedList<number>();
        linkedList.insertInBegin(13);
        linkedList.insertInBegin(7);

        expect(linkedList.head?.data).toBe(7);
        expect(linkedList.head?.next?.data).toBe(13);
    });
})

describe("insertAtEnd", () => {
    it("should insert in the beginning when the list is empty", () => {
        const linkedList = new LinkedList<number>();
        linkedList.insertAtEnd(13);

        expect(linkedList.head?.data).toBe(13);
        expect(linkedList.head?.next).toBe(undefined);
    });

    it("should insert at the end when the list is not empty", () => {
        const linkedList = new LinkedList<number>();
        linkedList.insertAtEnd(13);
        linkedList.insertAtEnd(7);

        expect(linkedList.head?.data).toBe(13);
        expect(linkedList.head?.next?.data).toBe(7);
    });
})

describe('delete', () => {
    it('should not delete anything if no data match is found', function () {
        const linkedList = new LinkedList<number>();
        linkedList.insertInBegin(13);
        linkedList.insertInBegin(7);

        linkedList.deleteNode(55);
        expect(linkedList.head?.data).toBe(7);
        expect(linkedList.head?.next?.data).toBe(13);
        expect(linkedList.head?.next?.next).toBe(undefined);
    });

    it('should delete node when the value is found', function () {
        const linkedList = new LinkedList<number>();
        linkedList.insertInBegin(13);
        linkedList.insertInBegin(7);
        linkedList.insertInBegin(33);
        linkedList.insertInBegin(55);
        expect(linkedList.head?.data).toBe(55);
        expect(linkedList.head?.next?.data).toBe(33);

        linkedList.deleteNode(33);

        expect(linkedList.head?.data).toBe(55);
        expect(linkedList.head?.next?.data).toBe(7);
    });

    it('should leave empty list when node to delete is the only one in list', function () {
        const linkedList = new LinkedList<number>();
        linkedList.insertInBegin(33);
        expect(linkedList.head?.data).toBe(33);

        linkedList.deleteNode(33);

        expect(linkedList.head).toBeUndefined();
    });
})

describe('size', () => {
    it('should return 0 when list is empty', function () {
        const linkedList = new LinkedList<number>();

        expect(linkedList.size()).toBe(0);
    });

    it('should return correct value when list is not empty', function () {
        const linkedList = new LinkedList<number>();
        linkedList.insertInBegin(5);
        linkedList.insertInBegin(13);
        linkedList.insertInBegin(7);
        linkedList.insertInBegin(23);
        linkedList.insertInBegin(24);

        expect(linkedList.size()).toBe(5);
    });
})

describe('traverse', () => {
    it('should return empty list when linked list is empty', function () {
        const linkedList = new LinkedList<number>();

        expect(linkedList.traverse()).toStrictEqual([]);
    });

    it('should return list of values in correct order when linked list is not empty', function () {
        const linkedList = new LinkedList<number>();
        linkedList.insertInBegin(13);
        linkedList.insertInBegin(22);
        linkedList.insertInBegin(23);
        linkedList.insertInBegin(33);
        linkedList.insertInBegin(55);

        expect(linkedList.traverse()).toStrictEqual([55, 33, 23, 22, 13]);
    });
})

describe('search', () => {
    it('should return null when no element satisfy given search callback', function () {
        const searchCallback = (it: number) => it === 13;

        const linkedList = new LinkedList<number>();
        linkedList.insertInBegin(55);
        linkedList.insertInBegin(44);
        linkedList.insertInBegin(33);
        linkedList.insertInBegin(77);

        expect(linkedList.search(searchCallback)).toBeNull();
    });

    it('should return correct element on a given search callback', function () {
        const searchCallback = (it: number) => it === 13;
        const linkedList = new LinkedList<number>();
        linkedList.insertInBegin(55);
        linkedList.insertInBegin(44);
        linkedList.insertInBegin(13);
        linkedList.insertInBegin(77);

        const result = linkedList.search(searchCallback);
        expect(result).not.toBeNull();
        expect(result).toBeInstanceOf(Node);
        expect(result?.data).toBe(13);
    });
})