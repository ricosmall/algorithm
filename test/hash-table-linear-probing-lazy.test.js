import HashTableLinearProbingLazy from '../src/data-structures/hash-table-linear-probing-lazy'

describe('HashTableLinearProbingLazy', () => {
  let hashTable
  beforeEach(() => {
    hashTable = new HashTableLinearProbingLazy()
  })

  test('get hash code of a key', () => {
    let key = 'hello'
    expect(hashTable.hashCode(key)).toBe(14)
    key = 'world'
    expect(hashTable.hashCode(key)).toBe(34)
    key = 'hello'
    expect(hashTable.hashCode(key)).toBe(14)
  })

  test('put element', () => {
    let key = 'hello'
    let value = 'world'
    expect(hashTable.put(key, value)).toBe(true)
    expect(hashTable.get(key)).toBe(value)
    key = null
    expect(hashTable.put(key, value)).toBe(false)
    expect(hashTable.get(key)).toBe(undefined)
    key = 'test'
    value = null
    expect(hashTable.put(key, value)).toBe(false)
    expect(hashTable.get(key)).toBe(undefined)
    key = 'hlleo'
    value = 'test'
    expect(hashTable.put(key, value)).toBe(true)
    expect(hashTable.get(key)).toBe(value)
  })

  test('remove element', () => {
    let key = 'hello'
    let value = 'world'
    hashTable.put(key, value)
    expect(hashTable.get(key)).toBe(value)
    expect(hashTable.remove(key)).toBe(true)
    expect(hashTable.get(key)).toBe(undefined)
    key = 'test'
    expect(hashTable.remove(key)).toBe(false)
    key = 'hlleo'
    value = 'test'
    hashTable.put(key, value)
    key = 'hello'
    value = 'world'
    hashTable.put(key, value)
    expect(hashTable.get(key)).toBe(value)
    expect(hashTable.remove(key)).toBe(true)
    expect(hashTable.get(key)).toBe(undefined)
  })

  test('get element', () => {
    let key = 'hello'
    let value = 'world'
    expect(hashTable.get(key)).toBe(undefined)
    hashTable.put(key, value)
    expect(hashTable.get(key)).toBe(value)
  })
})
