# Challenge 17: The Christmas Lights Panel

At the North Pole, they’ve set up a panel of Christmas lights 🎄✨ to decorate the workshop. Each light can be on with a color, or off.

The panel is represented as a matrix where each cell can be:

- '.' → light off
- 'R' → red light
- 'G' → green light

The elves want to know if there is a line of 4 lights of the same color that are on and aligned on the panel (only horizontal ↔ or vertical ↕). Lights that are off ('.') don’t count.

### Examples

```javascript
hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
])
// true → there are 4 red lights horizontally

hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
])
// true → there are 4 green lights vertically

hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])
// false → there are no 4 lights of the same color in a row

```

### Note:
The board can be any size. No diagonals.