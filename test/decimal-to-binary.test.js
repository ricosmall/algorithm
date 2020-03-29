import decimalToBinary from '../src/algorithms/decimal-to-binary'

describe('algorithm decimalToBinary', () => {
  test('transform decimal 11 to equal binary 1011', () => {
    expect(decimalToBinary(11)).toBe('1011')
  })

  test('transform decimal 0 to equal binary 0', () => {
    expect(decimalToBinary(0)).toBe('0')
  })

  test('transform decimal 1 to equal binary 1', () => {
    expect(decimalToBinary(1)).toBe('1')
  })

  test('transform decimal 10 to equal binary 1010', () => {
    expect(decimalToBinary(10)).toBe('1010')
  })
})
