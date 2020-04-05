import {defaultEquals, defaultCompare, Compare} from '../utils'
import LinkedList from './linked-list'

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFun = defaultEquals, compareFun = defaultCompare) {
    super(equalsFun)
    this.compareFun = compareFun
  }

  insert(element) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }

  getIndexNextSortedElement(element) {
    let current = this.head
    let i = 0
    for(; i < this.size() && current; i++) {
      const compare = this.compareFun(element, current.element)
      if (compare === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}