class Stack {
  constructor () {
    this.count = 0
    this.items = {}
  }

  push (element) {
    this.items[this.count] = element
    this.count += 1
  }

  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count -= 1
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count]
  }

  size () {
    return this.count
  }

  clear () {
    this.items = {}
    this.count = 0
  }

  isEmpty () {
    return this.count === 0
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = this.items[0]
    for (let i = 1; i < this.count; i++) {
      str += `,${this.items[i]}`
    }
    return str
  }
}