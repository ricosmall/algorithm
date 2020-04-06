import StackLinkedList from '../src/data-structures/stack-linked-list'

describe('StackLinkedList', () => {
  let stackLinkedList
  beforeEach(() => {
    stackLinkedList = new StackLinkedList()
  })

  test('push element', () => {
    expect(stackLinkedList.isEmpty()).toBe(true)
    stackLinkedList.push(1)
    stackLinkedList.push(2)
    expect(stackLinkedList.size()).toBe(2)
  })

  test('pop element', () => {
    stackLinkedList.push(1)
    stackLinkedList.push(2)
    expect(stackLinkedList.size()).toBe(2)
    expect(stackLinkedList.pop()).toBe(2)
    expect(stackLinkedList.size()).toBe(1)
  })

  test('peek element', () => {
    stackLinkedList.push(1)
    expect(stackLinkedList.size()).toBe(1)
    expect(stackLinkedList.peek()).toBe(1)
    expect(stackLinkedList.size()).toBe(1)
    stackLinkedList.push(2)
    expect(stackLinkedList.peek()).toBe(2)
    expect(stackLinkedList.size()).toBe(2)
  })
})