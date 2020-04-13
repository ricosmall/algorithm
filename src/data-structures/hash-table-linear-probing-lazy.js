import HashTable from './hash-table'
import ValuePairs from '../models/value-pairs'
import { defaultToString } from '../utils'

export default class HashTableLinearProbingLazy extends HashTable {
  constructor(toStringFn = defaultToString) {
    super(toStringFn)
    this.table = {}
  }
  put(key, value) {
    if (key && value) {
      const position = this.hashCode(key)
      if (!this.table[position]) {
        this.table[position] = new ValuePairs(key, value)
      } else {
        let index = position + 1
        while (this.table[index]) {
          index += 1
        }
        this.table[index] = new ValuePairs(key, value)
      }
      return true
    }
    return false
  }
  remove(key) {
    const position = this.hashCode(key)
    if (this.table[position]) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
        return true
      } else {
        let index = position + 1
        while (this.table[index] && this.table[index].key !== key) {
          index += 1
        }
        if (this.table[index] && this.table[index].key === key) {
          delete this.table[index]
          this.verifyRemoveSideEffect(key, index)
          return true
        }
      }
      return false
    }
  }
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key)
    let index = removedPosition + 1
    while (this.table[index]) {
      const posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        index += 1
      }
    }
  }
  get(key) {
    const position = this.hashCode(key)
    if (this.table[position]) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1
      while (this.table[index] && this.table[index].key !== key) {
        index += 1
      }
      if (this.table[index] && this.table[index].key === key) {
        return this.table[index].value
      }
    }
    return undefined
  }
}
