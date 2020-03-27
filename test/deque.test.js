import Deque from '../src/data-structures/deque'

describe('Deque', () => {
  let deque
  beforeEach(() => {
    deque = new Deque()
  })

  test('create a instance to equal blank object', () => {
    expect(deque.items).toEqual({})
  })

  test('add elements to front', () => {
    deque.addFront(1)
    deque.addFront(2)
    deque.addFront(3)
    expect(deque.size()).toBe(3)
    expect(deque.removeFront()).toBe(3)
    expect(deque.removeBack()).toBe(1)
  })

  test('add elements to back', () => {
    deque.addBack(1)
    deque.addBack(2)
    deque.addBack(3)
    expect(deque.size()).toBe(3)
    expect(deque.removeBack()).toBe(3)
    expect(deque.removeFront()).toBe(1)
  })

  test('remove element from back', () => {
    deque.addBack(1)
    deque.addBack(2)
    deque.addBack(3)
    expect(deque.size()).toBe(3)
    expect(deque.removeBack()).toBe(3)
    expect(deque.size()).toBe(2)
    expect(deque.removeBack()).toBe(2)
    expect(deque.size()).toBe(1)
    expect(deque.removeBack()).toBe(1)
    expect(deque.isEmpty()).toBe(true)
    expect(deque.removeBack()).toBe(undefined)
    expect(deque.isEmpty()).toBe(true)
  })

  test('remove elements from front', () => {
    deque.addFront(1)
    deque.addFront(2)
    deque.addFront(3)
    expect(deque.size()).toBe(3)
    expect(deque.removeFront()).toBe(3)
    expect(deque.size()).toBe(2)
    expect(deque.removeFront()).toBe(2)
    expect(deque.size()).toBe(1)
    expect(deque.removeFront()).toBe(1)
    expect(deque.isEmpty()).toBe(true)
    expect(deque.removeFront()).toBe(undefined)
    expect(deque.isEmpty()).toBe(true)
  })

  test('peek element from front', () => {
    deque.addBack(1)
    expect(deque.size()).toBe(1)
    expect(deque.peekFront()).toBe(1)
    deque.addFront(2)
    expect(deque.peekFront()).toBe(2)
    deque.addBack(3)
    expect(deque.peekFront()).toBe(2)
    expect(deque.size()).toBe(3)
  })

  test('peek element from back', () => {
    deque.addFront(1)
    deque.addFront(2)
    expect(deque.peekBack()).toBe(1)
    expect(deque.size()).toBe(2)
    deque.addBack(3)
    expect(deque.peekBack()).toBe(3)
    expect(deque.size()).toBe(3)
  })

  test('if is is empty', () => {
    expect(deque.isEmpty()).toBe(true)
    deque.addBack(1)
    deque.addFront(2)
    expect(deque.isEmpty()).toBe(false)
    deque.removeFront()
    deque.removeBack()
    expect(deque.isEmpty()).toBe(true)
    deque.removeBack()
    expect(deque.isEmpty()).toBe(true)
  })

  test('return correct sizes', () => {
    expect(deque.size()).toBe(0)
    deque.addFront(1)
    deque.addFront(2)
    deque.addBack(3)
    expect(deque.size()).toBe(3)
    deque.removeBack()
    expect(deque.size()).toBe(2)
    deque.removeFront()
    deque.removeFront()
    expect(deque.size()).toBe(0)
    deque.removeFront()
    expect(deque.size()).toBe(0)
  })

  test('clear deque', () => {
    expect(deque.isEmpty()).toBe(true)
    deque.addBack(1)
    deque.addFront(2)
    expect(deque.isEmpty()).toBe(false)
    deque.clear()
    expect(deque.isEmpty()).toBe(true)
  })

  test('toString', () => {
    deque.addFront(1)
    deque.addBack(2)
    deque.addFront(3)
    expect(deque.toString()).toBe('3,1,2')
  })
})