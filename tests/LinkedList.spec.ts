import { LinkedList } from "../src/LinkedList";

describe("Linked list", () => {
    it("should throw 'Method not implemented.' when calling unimplemented method", () => {
        const linkedList = new LinkedList();

        expect(linkedList.insertInBegin).toThrowError("Method not implemented.");
    });
})