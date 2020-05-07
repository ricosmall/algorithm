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
    expect(stackLinkedList.pop()).toBe(undefined)
    stackLinkedList.push(1)
    stackLinkedList.push(2)
    expect(stackLinkedList.size()).toBe(2)
    expect(stackLinkedList.pop()).toBe(2)
    expect(stackLinkedList.size()).toBe(1)
  })

  test('peek element', () => {
    expect(stackLinkedList.peek()).toBe(undefined)
    stackLinkedList.push(1)
    expect(stackLinkedList.size()).toBe(1)
    expect(stackLinkedList.peek()).toBe(1)
    expect(stackLinkedList.size()).toBe(1)
    stackLinkedList.push(2)
    expect(stackLinkedList.peek()).toBe(2)
    expect(stackLinkedList.size()).toBe(2)
  })

  test('clear', () => {
    expect(stackLinkedList.size()).toBe(0)
    stackLinkedList.push(1)
    stackLinkedList.push(2)
    expect(stackLinkedList.size()).toBe(2)
    stackLinkedList.clear()
    expect(stackLinkedList.size()).toBe(0)
  })

  test('toString', () => {
    stackLinkedList.push(1)
    stackLinkedList.push(2)
    expect(stackLinkedList.toString()).toBe('1,2')
  })
})