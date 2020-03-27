export default class Deque {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  addFront (element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount -= 1
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.lowestCount = 0
      this.items[0] = element
      this.count += 1
    }
  }

  addBack (element) {
    this.items[this.count] = element
    this.count += 1
  }

  removeFront () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount += 1
    return result
  }

  removeBack () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count -= 1
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peekFront () {
    return this.items[this.lowestCount]
  }

  peekBack () {
    return this.items[this.count - 1]
  }

  size () {
    return this.count - this.lowestCount
  }

  isEmpty () {
    return this.size() === 0
  }

  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str += `,${this.items[i]}`
    }
    return str
  }
}