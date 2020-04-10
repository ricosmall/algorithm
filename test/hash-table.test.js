import HashTable from '../src/data-structures/hash-table'

describe('HashTable', () => {
  let hashTable
  beforeEach(() => {
    hashTable = new HashTable()
  })

  test('get hash code of a key', () => {
    let key = 'hello'
    expect(hashTable.hashCode(key)).toBe(14)
    key = 'world'
    expect(hashTable.hashCode(key)).toBe(34)
    key = 'hello'
    expect(hashTable.hashCode(key)).toBe(14)
  })

  test('put value pairs', () => {
    let key = 'hello'
    let value = 'world'
    expect(hashTable.put(key, value)).toBe(true)
    expect(hashTable.get(key)).toEqual({key: 'hello', value: 'world'})
    key = 'name'
    value = 'John'
    expect(hashTable.put(key, value)).toBe(true)
    expect(hashTable.get(key)).toEqual({key: 'name', value: 'John'})
    key = 'test'
    value = null
    expect(hashTable.put(key, value)).toBe(false)
    expect(hashTable.get(key)).toBe(undefined)
    key = null
    value = 'test'
    expect(hashTable.put(key, value)).toBe(false)
    expect(hashTable.get(key)).toBe(undefined)
  })

  test('get value pairs by key', () => {
    let key = 'hello'
    let value = 'world'
    hashTable.put(key, value)
    expect(hashTable.get(key)).toEqual({key: 'hello', value: 'world'})
    key = 'test'
    expect(hashTable.get(key)).toBe(undefined)
  })

  test('remove value pairs by key', () => {
    let key = 'hello'
    let value = 'world'
    hashTable.put(key, value)
    expect(hashTable.get(key)).toEqual({key: 'hello', value: 'world'})
    expect(hashTable.remove(key)).toBe(true)
    expect(hashTable.get(key)).toBe(undefined)
    key = 'test'
    expect(hashTable.remove(key)).toBe(false)
  })
})