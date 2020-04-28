import RedBlackTree from '../src/data-structures/red-black-tree'

describe('RedBlackTree', () => {
  let redBlackTree
  beforeEach(() => {
    redBlackTree = new RedBlackTree()
  })

  test('insert key', () => {
    redBlackTree.insert(1)
    expect(redBlackTree.search(1)).toBe(true)
    redBlackTree.insert(2)
    expect(redBlackTree.search(2)).toBe(true)
  })

  test('remove key', () => {
    redBlackTree.insert(1)
    redBlackTree.insert(2)
    redBlackTree.remove(2)
    expect(redBlackTree.search(2)).toBe(false)
  })

  test('search key', () => {
    redBlackTree.insert(1)
    redBlackTree.insert(2)
    expect(redBlackTree.search(2)).toBe(true)
    expect(redBlackTree.search(3)).toBe(false)
  })
})