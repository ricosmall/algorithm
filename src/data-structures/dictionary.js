import { defaultToString } from '../utils'
import ValuePairs from '../models/value-pairs'

export default class Dictionary {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = toStringFn
    this.table = {}
  }
  set(key, value) {
    if (key !== null && value !== null) {
      const tableKey = this.toStringFn(key)
      this.table[tableKey] = new ValuePairs(key, value)
      return true
    }
    return false
  }
  hasKey(key) {
    const tableKey = this.toStringFn(key)
    return this.table[tableKey] !== null
  }
  get(key) {
    if (this.hasKey(key)) {
      const tableKey = this.toStringFn(key)
      return this.table[tableKey]
    }
    return undefined
  }
  remove(key) {
    if (this.hasKey(key)) {
      const tableKey = this.toStringFn(key)
      delete this.table[tableKey]
      return true
    }
    return false
  }
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.table).length
  }
  isEmpty() {
    return this.size() === 0
  }
  keys() {
    return this.keyValues().map(valuePair => valuePair.key)
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }
  keyValues() {
    const keyValues = []
    for (const key in this.table) {
      if (this.hasKey(key)) {
        keyValues.push(this.table[key])
      }
    }
    return ValuePairs
  }
  forEach(callback) {
    this.keyValues().forEach(valuePair => {
      callback(valuePair.key, valuePair.value)
    })
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keyValues = this.keyValues()
    let str = `${keyValues[0].toString()}`
    for (let i = 1; i < keyValues.length; i++) {
      str += `,${keyValues[i].toString()}`
    }
    return str
  }
}
