import HashTableLinearProbingLazy from '../src/data-structures/hash-table-linear-probing-lazy'

describe('HashTableLinearProbingLazy', () => {
  let hashTable
  beforeEach(() => {
    hashTable = new HashTableLinearProbingLazy()
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
  })

  test('get element', () => {
    let key = 'hello'
    let value = 'world'
    expect(hashTable.get(key)).toBe(undefined)
    hashTable.put(key, value)
    expect(hashTable.get(key)).toBe(value)
  })
})