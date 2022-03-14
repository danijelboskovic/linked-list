import { LinkedList } from "../src/LinkedList";

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