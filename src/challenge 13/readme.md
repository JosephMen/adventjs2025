# Challenge 13: The Assembly Line

Simulate the path of a gift inside a factory and return how it ends. To do this, you must create a function <b> runFactory(factory). </b>

<b>factory </b> is a <b>string[]</b> where each cell can be:

- <b> > < ^ v </b> movements
- <b>.</b> correct exit

Keep in mind that <b>all rows have the same length</b> and that<b> there will be no other symbols. </b>

The gift <b>always starts at position (0,0)</b> (top left). At each step it reads the current cell and moves according to the direction. If it reaches a cell with a dot (<b>.</b>) it means it has correctly exited the factory.

### Result

Return one of these values:

- <b>'completed'</b> if it reaches a .
- <b>'loop'</b> if it visits a position twice
- <b>'broken'</b> if it goes outside the board

### Examples

```javascript
runFactory([
  '>>.'
]) // 'completed'

runFactory([
  '>>>'
]) // 'broken'

runFactory([
  '>><'
]) // 'loop'

runFactory([
  '>>v',
  '..<'
]) // 'completed'

runFactory([
  '>>v',
  '<<<'
]) // 'broken'

runFactory([
  '>v.',
  '^..'
]) // 'completed'

runFactory([
  'v.',
  '^.'
]) // 'loop'

```
