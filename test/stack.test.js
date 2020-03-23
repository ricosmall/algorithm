import Stack from '../src/stack'

test('create a instance which items to be an array', () => {
  const stack = new Stack()
  expect(stack.items).toEqual([])
})