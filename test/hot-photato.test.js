import hotPhotato from '../src/algorithms/hot-photato'

describe('hotPhotato', () => {
  const elements = ['a', 'b', 'c', 'd', 'e']
  const num1 = 7
  const result1 = hotPhotato(elements, num1)
  test('five people with number 7 play game, winner to be the first one', () => {
    expect(result1.elimitated.length).toBe(4)
    expect(result1.winner).toBe('a')
  })

  const num2 = 8
  const result2 = hotPhotato(elements, num2)
  test('five people with number 8 play game, winner to be the second one', () => {
    expect(result2.elimitated.length).toBe(4)
    expect(result2.winner).toBe('b')
  })
})