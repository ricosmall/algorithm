import CircularLinkedList from '../src/data-structures/circular-linked-list'

describe('CircularLinkedList', () => {
  let circularLinkedList
  beforeEach(() => {
    circularLinkedList = new CircularLinkedList()
  })

  test('push elements', () => {
    expect(circularLinkedList.size()).toBe(0)
    circularLinkedList.push(1)
    circularLinkedList.push(2)
    circularLinkedList.push(3)
    expect(circularLinkedList.size()).toBe(3)
  })

  test('insert elements', () => {
    circularLinkedList.push(1)
    circularLinkedList.push(2)
    circularLinkedList.insert(3, 1)
    expect(circularLinkedList.getElementAt(1).element).toBe(3)
    expect(circularLinkedList.size()).toBe(3)
    circularLinkedList.insert(4, 0)
    expect(circularLinkedList.head.element).toBe(4)
    expect(circularLinkedList.size()).toBe(4)
    circularLinkedList.insert(5, 4)
    expect(circularLinkedList.getElementAt(circularLinkedList.size() - 1).element).toBe(5)
  })

  test('remove elements', () => {
    circularLinkedList.push(1)
    circularLinkedList.push(2)
    circularLinkedList.push(3)
    expect(circularLinkedList.removeAt(0)).toBe(1)
    expect(circularLinkedList.size()).toBe(2)
    expect(circularLinkedList.removeAt(1)).toBe(3)
    expect(circularLinkedList.size()).toBe(1)
    circularLinkedList.push(4)
    circularLinkedList.push(5)
    expect(circularLinkedList.removeAt(1)).toBe(4)
    expect(circularLinkedList.size()).toBe(2)
  })
})