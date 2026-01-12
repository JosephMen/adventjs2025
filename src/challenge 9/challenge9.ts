type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

export default function moveReno(board: Board, moves: Moves): Result {
  // Code here

  const movements = {
    'U': [-1,0],
    'D': [1,0],
    'L': [0,-1],
    'R': [0,1],
  }
  let renoIndex = [-1, -1]
  const boardArray = board.split('\n')
  .filter(Boolean)
  .map((e, indexRow) => {
    const renoIndexFound = e.indexOf('@')
    if(renoIndexFound > 0 ){
      renoIndex = [indexRow, renoIndexFound]
    }
    return e.split('')
  })


  const maxRows = boardArray.length
  const maxCols = boardArray[0]?.length ?? 0

  for(let letter of moves){
    const [offsetRows, offsetCols] = movements[letter]
    const [renoRow, renoCol] = renoIndex
    const [newRow, newCol] = [renoRow + offsetRows, renoCol + offsetCols]
    if(newRow == maxRows || newCol == maxCols || newRow < 0 || newCol < 0) return 'crash'
    const element = boardArray[newRow][newCol]
    if(element === '#') return 'crash'
    if(element === '*') return 'success'
    boardArray[renoRow][renoCol] = '.'
    boardArray[newRow][newCol] = '@'
    renoIndex = [newRow, newCol]
    
  }
  return 'fail';
}
const board = `
.....
.*#.*
.@...
.....
`
const result = moveReno(board, 'RU')
console.log({result})