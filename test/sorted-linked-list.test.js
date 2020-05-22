import SortedLinkedList from '../src/data-structures/sorted-linked-list'

describe('SortedLinkedList', () => {
  let sortedLinkedList

  beforeEach(() => {
    sortedLinkedList = new SortedLinkedList()
  })

  test('push element', () => {
    sortedLinkedList.push(1)
    sortedLinkedList.push(2)
    sortedLinkedList.push(3)
    expect(sortedLinkedList.size()).toBe(3)
  })

  test('insert element', () => {
    expect(sortedLinkedList.insert(1)).toBe(true)
    sortedLinkedList.push(2)
    expect(sortedLinkedList.size()).toBe(2)
    expect(sortedLinkedList.insert(4)).toBe(true)
    expect(sortedLinkedList.insert(3)).toBe(true)
    expect(sortedLinkedList.getElementAt(3).element).toBe(4)
    expect(sortedLinkedList.getElementAt(2).element).toBe(3)
  })

  test('get index of next sorted elemnt', () => {
    sortedLinkedList.push(1)
    sortedLinkedList.push(2)
    sortedLinkedList.insert(4)
    sortedLinkedList.insert(3)
    expect(sortedLinkedList.getIndexNextSortedElement(2)).toBe(2)
    expect(sortedLinkedList.getIndexNextSortedElement(3)).toBe(3)
  })
})