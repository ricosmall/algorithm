import LinkedList from '../src/data-structures/linked-list'

describe('LinkedList', () => {
  let linkedList
  beforeEach(() => {
    linkedList = new LinkedList()
  })

  test('create a instance with a null head', () => {
    expect(linkedList.head).toBe(null)
  })

  test('push elements', () => {
    linkedList.push(1)
    expect(linkedList.size()).toBe(1)
    expect(linkedList.head.element).toBe(1)
    linkedList.push(2)
    expect(linkedList.size()).toBe(2)
    expect(linkedList.isEmpty()).toBe(false)
  })

  test('insert elements', () => {
    linkedList.push(1)
    linkedList.push(2)
    expect(linkedList.insert(3, 1)).toBe(true)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.getElementAt(1).element).toBe(3)
    expect(linkedList.insert(4, 5)).toBe(false)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.insert(4, 3)).toBe(true)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.insert(5, 0)).toBe(true)
    expect(linkedList.size()).toBe(5)
    expect(linkedList.head.element).toBe(5)
  })

  test('get element at index', () => {
    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)
    expect(linkedList.getElementAt(0).element).toBe(1)
    expect(linkedList.getElementAt(2).element).toBe(3)
    linkedList.insert(4, 2)
    expect(linkedList.getElementAt(2).element).toBe(4)
  })

  test('get index of element', () => {
    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)
    expect(linkedList.indexOf(3)).toBe(2)
    linkedList.insert(4, 2)
    expect(linkedList.indexOf(4)).toBe(2)
  })

  test('remove elements', () => {
    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.remove(2)).toBe(2)
    expect(linkedList.size()).toBe(2)
    linkedList.push(4)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.remove(1)).toBe(1)
    expect(linkedList.size()).toBe(2)
    expect(linkedList.head.element).toBe(3)
    expect(linkedList.remove(5)).toBe(undefined)
  })

  test('remove element at index', () => {
    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.removeAt(2)).toBe(3)
    expect(linkedList.size()).toBe(2)
    linkedList.push(4)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.removeAt(0)).toBe(1)
    expect(linkedList.size()).toBe(2)
    expect(linkedList.removeAt(4)).toBe(undefined)
  })

  test('return correct sizes', () => {
    expect(linkedList.size()).toBe(0)
    linkedList.push(1)
    expect(linkedList.size()).toBe(1)
    linkedList.insert(2, 1)
    expect(linkedList.size()).toBe(2)
    linkedList.push(3)
    expect(linkedList.size()).toBe(3)
    linkedList.remove(4)
    expect(linkedList.size()).toBe(3)
    linkedList.remove(3)
    expect(linkedList.size()).toBe(2)
  })

  test('if it is empty', () => {
    expect(linkedList.isEmpty()).toBe(true)
    linkedList.push(1)
    expect(linkedList.isEmpty()).toBe(false)
    linkedList.push(2)
    expect(linkedList.isEmpty()).toBe(false)
    linkedList.remove(2)
    linkedList.remove(1)
    expect(linkedList.isEmpty()).toBe(true)
    linkedList.remove(3)
    expect(linkedList.isEmpty()).toBe(true)
  })

  test('get head element', () => {
    expect(linkedList.getHead()).toBe(null)
    linkedList.push(1)
    expect(linkedList.getHead()).toEqual({element: 1, next: null})
    linkedList.push(2)
    linkedList.remove(1)
    expect(linkedList.getHead().element).toBe(2)
    linkedList.insert(3, 0)
    expect(linkedList.getHead().element).toBe(3)
  })

  test('toString', () => {
    linkedList.push(1)
    linkedList.push(2)
    linkedList.insert(3, 1)
    expect(linkedList.toString()).toBe('1,3,2')
  })
})