import palindromeChecker from '../src/algorithms/palindrome-checker'

describe('palindromeChecker', () => {
  test('"" is not a palindrome', () => {
    expect(palindromeChecker('')).toBe(false)
  })

  test('abc is not a palindrome', () => {
    expect(palindromeChecker('abc')).toBe(false)
  })

  test('aba is a palindrome', () => {
    expect(palindromeChecker('aba')).toBe(true)
  })

  test('aabbaa is a palindrome', () => {
    expect(palindromeChecker('aabbaa')).toBe(true)
  })
})
