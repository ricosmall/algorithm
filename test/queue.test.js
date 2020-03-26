import Queue from '../src/data-structures/queue'

describe('Queue', () => {
  let queue
  beforeEach(() => {
    queue = new Queue()
  })

  test('create a instance to equal blank object', () => {
    expect(queue.items).toEqual({})
  })

  test('enqueue elements', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.size()).toBe(2)
  })

  test('dequeue element', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    
    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBe(3)
    expect(queue.dequeue()).toBe(undefined)
  })

  test('peek element', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.peek()).toBe(1)
    expect(queue.size()).toBe(3)
    queue.dequeue()
    expect(queue.peek()).toBe(2)
  })

  test('if it is empty', () => {
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue(1)
    expect(queue.isEmpty()).toBe(false)
    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
  })

  test('return correct sizes', () => {
    expect(queue.size()).toBe(0)
    queue.enqueue(1)
    expect(queue.size()).toBe(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.size()).toBe(3)
    queue.dequeue()
    expect(queue.size()).toBe(2)
    queue.dequeue()
    queue.dequeue()
    expect(queue.size()).toBe(0)
    queue.dequeue()
    expect(queue.size()).toBe(0)
  })

  test('clear queue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.isEmpty()).toBe(false)
    queue.clear()
    expect(queue.isEmpty()).toBe(true)
    expect(queue.size()).toBe(0)
  })

  test('toString', () => {
    expect(queue.toString()).toBe('')
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.toString()).toBe('1,2')
  })
})