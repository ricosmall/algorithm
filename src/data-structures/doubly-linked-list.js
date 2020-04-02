import { DoublyNode } from '../models/linked-list-models'
import { defaultEquals } from '../utils/index'
import LinkedList from './linked-list'

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = null
  }

  push(element) {
    const node = new DoublyNode(element)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count += 1
  }

  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new DoublyNode(element)
      if (position === 0) {
        if (this.head === null) {
          this.head = node
          this.tail = node
        } else {
          const current = this.head
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (position === this.count) {
        const current = this.tail
        node.prev = current
        current.next = node
        this.tail = node
      } else {
        const current = this.getElementAt(position)
        const previous = current.prev
        previous.next = node
        node.prev = previous
        node.next = current
        current.prev = node
      }
      this.count += 1
      return true
    }
    return false
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        const next = current.next
        previous.next = next
        next.prev = previous
      }
      this.count -= 1
      return current.element
    }
    return undefined
  }

  indexOf(element) {
    let current = this.head
    let index = 0
    while (current !== null) {
      if (this.equalsFn(element, current.element)) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  getTail() {
    return this.tail
  }

  clear() {
    this.count = 0
    this.head = null
    this.tail = null
  }
}
