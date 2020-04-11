import { defaultToString } from '../utils'
import ValuePairs from '../models/value-pairs'

export default class HashTable {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = toStringFn
    this.table = {}
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStringFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }
  hashCode(key) {
    return this.loseloseHashCode(key)
  }
  put(key, value) {
    if (key && value) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePairs(key, value)
      return true
    }
    return false
  }
  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair){
      delete this.table[hash]
      return true
    }
    return false
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    if (!valuePair) return undefined
    return valuePair
  }
}
