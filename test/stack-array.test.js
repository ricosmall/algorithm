import Stack from '../src/stack-array'

describe('StackArray', () => {
  let stack
  beforeEach(() => {
    stack = new Stack()
  })

  test('create a instance to be a empty array', () => {
    expect(stack.items).toEqual([])
  })

  test('push elements', () => {
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    stack.push(3)
    expect(stack.size()).toBe(3)

    expect(stack.isEmpty()).toBe(false)
  })

  test('pop elements', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(undefined)
  })

  test('implements LIFO logic', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(undefined)
  })

  test('peek elements', () => {
    stack.push(1)
    expect(stack.peek()).toBe(1)

    stack.push(2)
    expect(stack.peek()).toBe(2)

    stack.pop()
    expect(stack.peek()).toBe(1)
  })

  test('returns correct size', () => {
    stack.push(1)
    expect(stack.size()).toBe(1)

    stack.pop()
    expect(stack.size()).toBe(0)

    stack.push(2)
    stack.push(3)
    expect(stack.size()).toBe(2)

    stack.pop()
    stack.pop()
    expect(stack.size()).toBe(0)
    stack.pop()
    expect(stack.size()).toBe(0)
  })

  test('return if it is empty', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
    stack.push(2)
    expect(stack.isEmpty()).toBe(false)

    stack.clear()
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
  })

  test('clear all elements', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
    stack.clear()
    expect(stack.isEmpty()).toBe(true)
  })
})
