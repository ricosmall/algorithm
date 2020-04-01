import DoublyLinkedList from '../src/data-structures/doubly-linked-list'

describe('DoublyLinkedList', () => {
  let doublyLinkedList
  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList()
  })

  test('push elements', () => {
    doublyLinkedList.push(1)
    doublyLinkedList.push(2)
    expect(doublyLinkedList.size()).toBe(2)
    expect(doublyLinkedList.tail.element).toBe(2)
    expect(doublyLinkedList.head.element).toBe(1)
  })
})