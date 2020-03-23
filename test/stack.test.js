const Stack = require('../src/stack.js')

test('create a instance which items to be an array', () => {
  expect(new Stack().items).toEqual([])
})