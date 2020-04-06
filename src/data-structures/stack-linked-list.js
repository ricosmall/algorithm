import DoublyLinkedList from './doubly-linked-list'

export default class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList()
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.items.size() - 1)
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.getElementAt(this.items.size() - 1).element
  }
  isEmpty() {
    return this.items.isEmpty()
  }
  size () {
    return this.items.size()
  }
  clear () {
    this.items.clear()
  }
  toString () {
    return this.items.toString()
  }
}