import Deque from '../data-structures/deque'

export default function palindromeChecker(str) {
  if (!str) {
    return false
  }
  const deque = new Deque()
  const lowerStr = str.toLowerCase()
  let isEqual = true
  let firstChar, lastChar

  for (let i = 0; i < lowerStr.length; i++) {
    deque.addBack(str.charAt(i))
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (lastChar !== firstChar) {
      isEqual = false
    }
  }

  return isEqual
}