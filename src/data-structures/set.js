export default class Set {
  constructor() {
    this.items = {}
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  clear() {
    this.items = {}
  }
  size() {
    let count = 0
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count += 1
      }
    }
    return count
  }
  values() {
    const values = []
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }
  union(otherSet) {
    const unionSet = new Set()
    let values = otherSet.values()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    values = this.values()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }
  intersection(otherSet) {
    const intersectionSet = new Set()
    const values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersection.add(values[i])
      }
    }
    return intersectionSet
  }
  difference(otherSet) {
    const differenceSet = new Set()
    const values = this.values()
    for (let i = 0; i < largeValues.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }
}