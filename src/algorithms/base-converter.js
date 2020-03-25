import Stack from '../data-structures/stack'

export default function baseConverter(decNumber, base = 2) {
  let num = decNumber
  if (num < 1) return num.toString()
  const baseString = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const stack = new Stack()
  let rem
  let result = ''
  while(num > 0) {
    rem = Math.floor(num % base)
    stack.push(baseString[rem])
    num = Math.floor(num / base)
  }
  while(!stack.isEmpty()) {
    result += stack.pop()
  }
  return result
}