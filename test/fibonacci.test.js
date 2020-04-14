import { fibonacciIteration, fibonacci } from '../src/algorithms/fibonacci'

describe('fibonacci', () => {
  test('fibonacci iteration', () => {
    expect(fibonacciIteration(0)).toBe(0)
    expect(fibonacciIteration(1)).toBe(1)
    expect(fibonacciIteration(2)).toBe(1)
    expect(fibonacciIteration(3)).toBe(2)
    expect(fibonacciIteration(4)).toBe(3)
    expect(fibonacciIteration(5)).toBe(5)
  })

  test('fibonacci recuration', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(4)).toBe(3)
    expect(fibonacci(5)).toBe(5)
  })
})
