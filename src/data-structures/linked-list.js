import { defaultEquals } from '../utils'
import { Node } from '../models/linked-list-models'

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }
  push(element) {
    const node = new Node(element)
    let current
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count += 1
  }
  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element)
      if (position === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(position - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count += 1
      return true
    }
    return false
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }
  removeAt(index) {
    if (index >= this.count || index < 0) {
      return undefined
    }
    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      let previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count -= 1
    return current.element
  }
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(current.element, element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let str = `${this.head.element}`
    let current = this.head.next
    for (let i = 0; i < this.count && current !== null; i++) {
      str += `,${current.element}`
      current = current.next
    }
    return str
  }
}
