import { factorial, factorialIteration } from '../src/algorithms/factorial'

describe('factorial', () => {
  test('factorial iteration', () => {
    expect(factorial(-1)).toBe(undefined)
    expect(factorial(0)).toBe(1)
    expect(factorial(1)).toBe(1)
    expect(factorial(2)).toBe(2)
    expect(factorial(3)).toBe(6)
    expect(factorial(4)).toBe(24)
    expect(factorial(5)).toBe(120)
  })

  test('factorial recuration', () => {
    expect(factorialIteration(-1)).toBe(undefined)
    expect(factorialIteration(0)).toBe(1)
    expect(factorialIteration(1)).toBe(1)
    expect(factorialIteration(2)).toBe(2)
    expect(factorialIteration(3)).toBe(6)
    expect(factorialIteration(4)).toBe(24)
    expect(factorialIteration(5)).toBe(120)
  })
})
