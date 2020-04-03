import LinkedList from './linked-list'
import { defaultEquals } from '../utils'
import { Node } from '../models/linked-list-models'

export default class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        if (this.head === null) {
          this.head = node
          node.next = this.head
        } else {
          const tail = this.getElementAt(this.size())
          node.next = this.head
          tail.next = node
          this.head = node
        }
      } else {
        const previous = this.getElementAt(position - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count += 1
      return true
    }
    return false
  }

  removeAt(index) {
    if (index >=0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = null
        } else {
          const removed = this.head
          current = removed.next
          this.head = current
          const tail = this.getElementAt(this.size())
          tail.next = current
          current = removed
        }
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count -= 1
      return current.element
    }
    return undefined
  }
}