import Stack from '../data-structures/stack'

export default function decimalToBinary (decNumber) {
  let num = decNumber
  if (num < 2) return num.toString()
  const stack = new Stack()
  let rem
  let result = ''
  while (num > 0) {
    rem = Math.floor(num % 2)
    stack.push(rem)
    num = Math.floor(num / 2)
  }
  while (!stack.isEmpty()) {
    result += stack.pop()
  }
  return result
}