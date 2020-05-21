import Stack from '../src/data-structures/stack'

describe('Stack', () => {
  let stack
  beforeEach(() => {
    stack = new Stack()
  })

  test('create a instance to equal blank object', () => {
    expect(stack.items).toEqual({})
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
    expect(stack.size()).toBe(2)
    expect(stack.pop()).toBe(2)
    expect(stack.size()).toBe(1)
    expect(stack.pop()).toBe(1)
    expect(stack.isEmpty()).toBe(true)
    expect(stack.pop()).toBe(undefined)
    expect(stack.isEmpty()).toBe(true)
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

  test('peek element', () => {
    expect(stack.peek()).toBe(undefined)
    stack.push(1)
    stack.push(2)

    expect(stack.size()).toBe(2)
    expect(stack.peek()).toBe(2)
    expect(stack.size()).toBe(2)

    stack.push(3)
    expect(stack.peek()).toBe(3)
    expect(stack.size()).toBe(3)
  })

  test('return correct sizes', () => {
    expect(stack.size()).toBe(0)
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    stack.pop()
    expect(stack.size()).toBe(1)
    stack.clear()
    expect(stack.size()).toBe(0)
  })

  test('return if it is empty', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    stack.push(2)
    expect(stack.isEmpty()).toBe(false)

    stack.pop()
    expect(stack.isEmpty()).toBe(false)
    stack.clear()
    expect(stack.isEmpty()).toBe(true)
  })

  test('remove all elements', () => {
    stack.push(1)
    stack.push(2)

    expect(stack.size()).toBe(2)
    stack.clear()
    expect(stack.isEmpty()).toBe(true)
  })

  test('toString', () => {
    expect(stack.toString()).toBe('')
    stack.push(1)
    expect(stack.toString()).toBe('1')
    stack.push(2)
    expect(stack.toString()).toBe('1,2')
  })
})
