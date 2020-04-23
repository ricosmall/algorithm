import BinarySearchTree from '../src/data-structures/binary-search-tree'

describe('BinarySearchTree', () => {
  let binarySearchTree
  beforeEach(() => {
    binarySearchTree = new BinarySearchTree()
  })

  test('insert key', () => {
    binarySearchTree.insert(1)
    expect(binarySearchTree.root.key).toBe(1)
    expect(binarySearchTree.search(1)).toBe(true)
    binarySearchTree.insert(2)
    expect(binarySearchTree.search(2)).toBe(true)
  })

  test('search key', () => {
    expect(binarySearchTree.search(1)).toBe(false)
    binarySearchTree.insert(1)
    expect(binarySearchTree.search(1)).toBe(true)
    binarySearchTree.insert(2)
    expect(binarySearchTree.search(2)).toBe(true)
  })

  test('remove key', () => {
    binarySearchTree.insert(2)
    binarySearchTree.insert(1)
    binarySearchTree.insert(5)
    expect(binarySearchTree.search(1)).toBe(true)
    binarySearchTree.remove(1)
    expect(binarySearchTree.search(1)).toBe(false)
    binarySearchTree.insert(3)
    binarySearchTree.insert(4)
    binarySearchTree.insert(6)
    binarySearchTree.insert(7)
    binarySearchTree.remove(5)
    expect(binarySearchTree.search(4)).toBe(true)
    expect(binarySearchTree.search(6)).toBe(true)
  })

  test('get min key', () => {
    binarySearchTree.insert(3)
    binarySearchTree.insert(5)
    binarySearchTree.insert(4)
    expect(binarySearchTree.min().key).toBe(3)
    binarySearchTree.insert(1)
    expect(binarySearchTree.min().key).toBe(1)
  })

  test('get max key', () => {
    binarySearchTree.insert(3)
    binarySearchTree.insert(2)
    binarySearchTree.insert(1)
    expect(binarySearchTree.max().key).toBe(3)
    binarySearchTree.insert(4)
    expect(binarySearchTree.max().key).toBe(4)
  })

  test('pre order traverse', () => {
    let result = []
    let callback = (val) => result.push(val)
    binarySearchTree.insert(4)
    binarySearchTree.insert(2)
    binarySearchTree.insert(3)
    binarySearchTree.insert(1)
    binarySearchTree.insert(6)
    binarySearchTree.insert(5)
    binarySearchTree.insert(7)
    binarySearchTree.preOrderTraverse(callback)
    expect(result).toEqual([4, 2, 1, 3, 6, 5, 7])
  })

  test('in order traverse', () => {
    let result = []
    let callback = (val) => result.push(val)
    binarySearchTree.insert(4)
    binarySearchTree.insert(2)
    binarySearchTree.insert(3)
    binarySearchTree.insert(1)
    binarySearchTree.insert(6)
    binarySearchTree.insert(5)
    binarySearchTree.insert(7)
    binarySearchTree.inOrderTraverse(callback)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  test('post order traverse', () => {
    let result = []
    let callback = (val) => result.push(val)
    binarySearchTree.insert(4)
    binarySearchTree.insert(2)
    binarySearchTree.insert(3)
    binarySearchTree.insert(1)
    binarySearchTree.insert(6)
    binarySearchTree.insert(5)
    binarySearchTree.insert(7)
    binarySearchTree.postOrderTraverse(callback)
    expect(result).toEqual([1, 3, 2, 5, 7, 6, 4])
  })
})
