import Set from '../src/data-structures/set'

describe('Set', () => {
  let set
  beforeEach(() => {
    set = new Set()
  })

  test('add elements', () => {
    set.add(1)
    expect(set.has(1)).toBe(true)
    expect(set.size()).toBe(1)
    set.add(2)
    expect(set.has(2)).toBe(true)
    expect(set.size()).toBe(2)
    expect(set.add(2)).toBe(false)
  })

  test('delete elements', () => {
    set.add(1)
    set.add(2)
    set.add(3)
    expect(set.size()).toBe(3)
    expect(set.delete(2)).toBe(true)
    expect(set.delete(4)).toBe(false)
    expect(set.size()).toBe(2)
    expect(set.delete(3)).toBe(true)
    expect(set.delete(1)).toBe(true)
    expect(set.size()).toBe(0)
  })

  test('if element is in set', () => {
    set.add(1)
    set.add(2)
    set.add(3)
    expect(set.size()).toBe(3)
    expect(set.has(1)).toBe(true)
    expect(set.has(2)).toBe(true)
    expect(set.has(3)).toBe(true)
    expect(set.has(4)).toBe(false)
  })

  test('clear set', () => {
    expect(set.size()).toBe(0)
    set.add(1)
    set.add(2)
    expect(set.size()).toBe(2)
    set.clear()
    expect(set.size()).toBe(0)
  })

  test('return correct size', () => {
    expect(set.size()).toBe(0)
    set.add(1)
    set.add(2)
    expect(set.size()).toBe(2)
  })

  test('get values of set', () => {
    set.add(1)
    set.add(2)
    set.add(3)
    expect(set.values()).toEqual([1,2,3])
  })

  test('union sets', () => {
    set.add(1)
    set.add(2)
    const otherSet = new Set()
    otherSet.add(3)
    const unionSet = set.union(otherSet)
    expect(unionSet.size()).toBe(3)
    expect(unionSet.values()).toEqual([1,2,3])
  })

  test('intersection sets', () => {
    set.add(1)
    set.add(2)
    const otherSet = new Set()
    otherSet.add(1)
    let intersectionSet = set.intersection(otherSet)
    expect(intersectionSet.size()).toBe(1)
    expect(intersectionSet.values()).toEqual([1])
    otherSet.delete(1)
    otherSet.add(3)
    intersectionSet = set.intersection(otherSet)
    expect(intersectionSet.size()).toBe(0)
  })

  test('difference sets', () => {
    set.add(1)
    set.add(2)
    const otherSet = new Set()
    otherSet.add(1)
    otherSet.add(2)
    let differenceSet = set.difference(otherSet)
    expect(differenceSet.size()).toBe(0)
    set.add(3)
    differenceSet = set.difference(otherSet)
    expect(differenceSet.size()).toBe(1)
    expect(differenceSet.values()).toEqual([3])
  })
})