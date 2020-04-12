import ValuePairs from '../models/value-pairs'
import {defaultToString} from '../utils'
import HashTable from './hash-table'
import LinkedList from './linked-list'

export default class HashTableSeperateChaining extends HashTable {
  constructor(toStringFn = defaultToString) {
    super(toStringFn)
    this.table = {}
  }

  put(key, value) {
    if (key && value) {
      const position = this.hashCode(key)
      if (!this.table[position]) {
        this.table[position] = new LinkedList()
      }
      const valuePairs = new ValuePairs(key, value)
      this.table[position].push(valuePairs)
      return true
    }
    return false
  }
  get(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
    }
    return undefined
  }
  remove(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element)
          if (linkedList.isEmpty()) {
            delete this.table[position]
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }
}