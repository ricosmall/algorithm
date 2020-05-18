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

  test('insert elements', () => {
    expect(doublyLinkedList.insert(1, -1)).toBe(false)
    doublyLinkedList.insert(1, 0)
    expect(doublyLinkedList.size()).toBe(1)
    doublyLinkedList.remove(1)
    doublyLinkedList.push(1)
    doublyLinkedList.push(2)
    doublyLinkedList.insert(3, 1)
    expect(doublyLinkedList.size()).toBe(3)
    expect(doublyLinkedList.getElementAt(1).element).toBe(3)
    doublyLinkedList.insert(4, 0)
    expect(doublyLinkedList.size()).toBe(4)
    expect(doublyLinkedList.head.element).toBe(4)
    doublyLinkedList.insert(5, 4)
    expect(doublyLinkedList.size()).toBe(5)
    expect(doublyLinkedList.tail.element).toBe(5)
  })

  test('get element at index', () => {
    doublyLinkedList.push(1)
    doublyLinkedList.push(2)
    doublyLinkedList.push(3)
    expect(doublyLinkedList.getElementAt(0).element).toBe(1)
    expect(doublyLinkedList.getElementAt(1).element).toBe(2)
    expect(doublyLinkedList.getElementAt(2).element).toBe(3)
    doublyLinkedList.insert(4, 2)
    expect(doublyLinkedList.getElementAt(2).element).toBe(4)
  })

  test('remove element', () => {
    doublyLinkedList.push(1)
    doublyLinkedList.push(2)
    doublyLinkedList.push(3)
    expect(doublyLinkedList.size()).toBe(3)
    expect(doublyLinkedList.remove(3)).toBe(3)
    expect(doublyLinkedList.size()).toBe(2)
    expect(doublyLinkedList.remove(3)).toBe(undefined)
    expect(doublyLinkedList.remove(2)).toBe(2)
    expect(doublyLinkedList.remove(1)).toBe(1)
    expect(doublyLinkedList.isEmpty()).toBe(true)
  })

  test('remove element at index', () => {
    doublyLinkedList.push(1)
    doublyLinkedList.push(2)
    expect(doublyLinkedList.removeAt(0)).toBe(1)
    doublyLinkedList.insert(1, 0)
    doublyLinkedList.push(3)
    expect(doublyLinkedList.size()).toBe(3)
    expect(doublyLinkedList.removeAt(1)).toBe(2)
    expect(doublyLinkedList.size()).toBe(2)
    expect(doublyLinkedList.removeAt(2)).toBe(undefined)
    expect(doublyLinkedList.size()).toBe(2)
    expect(doublyLinkedList.removeAt(1)).toBe(3)
    expect(doublyLinkedList.removeAt(0)).toBe(1)
    expect(doublyLinkedList.isEmpty()).toBe(true)
  })

  test('if it is empty', () => {
    expect(doublyLinkedList.isEmpty()).toBe(true)
    doublyLinkedList.push(1)
    doublyLinkedList.push(2)
    expect(doublyLinkedList.isEmpty()).toBe(false)
    doublyLinkedList.clear()
    expect(doublyLinkedList.isEmpty()).toBe(true)
  })

  test('return correct size', () => {
    expect(doublyLinkedList.size()).toBe(0)
    doublyLinkedList.push(1)
    doublyLinkedList.push(2)
    expect(doublyLinkedList.size()).toBe(2)
    doublyLinkedList.removeAt(1)
    expect(doublyLinkedList.size()).toBe(1)
    doublyLinkedList.removeAt(0)
    expect(doublyLinkedList.size()).toBe(0)
  })

  test('get head element', () => {
    expect(doublyLinkedList.getHead()).toBe(null)
    doublyLinkedList.push(1)
    expect(doublyLinkedList.getHead().element).toBe(1)
    doublyLinkedList.push(2)
    expect(doublyLinkedList.getHead().element).toBe(1)
  })

  test('get tail element', () => {
    expect(doublyLinkedList.getTail()).toBe(null)
    doublyLinkedList.push(1)
    expect(doublyLinkedList.getTail().element).toBe(1)
    doublyLinkedList.push(2)
    expect(doublyLinkedList.getTail().element).toBe(2)
  })

  test('clear', () => {
    doublyLinkedList.push(1)
    doublyLinkedList.push(2)
    expect(doublyLinkedList.isEmpty()).toBe(false)
    doublyLinkedList.clear()
    expect(doublyLinkedList.isEmpty()).toBe(true)
  })

  test('toString', () => {
    doublyLinkedList.push(1)
    doublyLinkedList.push(2)
    doublyLinkedList.push(3)
    expect(doublyLinkedList.toString()).toBe('1,2,3')
  })
})