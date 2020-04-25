import RedBlackTree from '../src/data-structures/red-black-tree'

describe('RedBlackTree', () => {
  let redBlackTree
  beforeEach(() => {
    redBlackTree = new RedBlackTree()
  })

  test('insert key', () => {
    redBlackTree.insert(1)
    expect(redBlackTree.search(1)).toBe(true)
  })
})