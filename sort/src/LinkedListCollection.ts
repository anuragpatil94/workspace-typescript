import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public val: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  get length(): number {
    let count = 0;
    if (!this.head) {
      return count;
    }

    count = 1;
    let current = this.head;
    while (current.next) {
      current = current.next;
      count++;
    }

    return count;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is Empty");
    }

    return this.at(leftIndex).val > this.at(rightIndex).val;
  }

  swap(leftIndex: number, rightIndex: number) {
    if (!this.head) {
      throw new Error("List is Empty");
    }

    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);
    const leftHand = leftNode.val;
    leftNode.val = rightNode.val;
    rightNode.val = leftHand;
  }

  print(): void {
    if (!this.head) {
      throw new Error("List is Empty");
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index Out of Bounds");
    }

    let current: Node | null = this.head;
    let counter = 0;
    while (current) {
      if (counter === index) {
        return current;
      }
      counter += 1;
      current = current.next;
    }

    throw new Error("Index Out of Bounds");
  }

  add(val: number): void {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}
