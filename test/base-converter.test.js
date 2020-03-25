import baseConverter from '../src/algorithms/base-converter'

describe('algorithm baseConverter', () => {
  test('transform decimal 1 to equal binary 1', () => {
    expect(baseConverter(1)).toBe('1')
  })

  test('transform decimal 1 to equal hexadecimal 1', () => {
    expect(baseConverter(1, 16)).toBe('1')
  })

  test('transform decimal 10 to equal binary 1010', () => {
    expect(baseConverter(10)).toBe('1010')
  })

  test('transform decimal 10 to equal hexadecimal A', () => {
    expect(baseConverter(10, 16)).toBe('A')
  })

  test('transform decimal 10 to equal octonary 12', () => {
    expect(baseConverter(10, 8)).toBe('12')
  })

  test('transform decimal 100 to equal binary 1100100', () => {
    expect(baseConverter(100)).toBe('1100100')
  })

  test('transform decimal 100 to equal octonary 144', () => {
    expect(baseConverter(100, 8)).toBe('144')
  })

  test('transform deciaml 100 to equal hexadecimal 64', () => {
    expect(baseConverter(100, 16)).toBe('64')
  })

  test('transform decimal 100 to equal 36 hexadecimal 2S', () => {
    expect(baseConverter(100, 36)).toBe('2S')
  })
})