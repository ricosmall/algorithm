import HashTableSeperateChaining from '../src/data-structures/hash-table-seperate-chaining'

describe('HashTableSeperateChaining', () => {
  let hashTable
  beforeEach(() => {
    hashTable = new HashTableSeperateChaining() 
  })

  test('put elements', () => {
    let key = 'hello'
    let value = 'world'
    expect(hashTable.put(key, value)).toBe(true)
    expect(hashTable.get(key)).toBe('world')
    key = null
    value = 'test'
    expect(hashTable.put(key, value)).toBe(false)
    key = 'heoll'
    value = 'hahaha'
    expect(hashTable.put(key, value)).toBe(true)
    expect(hashTable.get(key)).toBe('hahaha')
  })

  test('get element by key', () => {
    let key = 'hello'
    let value = 'world'
    expect(hashTable.put(key, value)).toBe(true)
    expect(hashTable.get(key)).toBe('world')
    key = 'test'
    expect(hashTable.get(key)).toBe(undefined)
  })

  test('remove element by key', () => {
    let key = 'hello'
    let value = 'world'
    expect(hashTable.put(key, value)).toBe(true)
    expect(hashTable.get(key)).toBe('world')
    expect(hashTable.remove(key)).toBe(true)
    key  = 'test'
    expect(hashTable.remove(key)).toBe(false)
  })
})