type Factory = string[]
type Result = 'completed' | 'broken' | 'loop'
      
export function runFactory(factory: Factory): Result {

  const rowNumbers = factory.length
  const colNumbers = factory[0]?.length
  let currentPos = {row: 0, col: 0 }
  const directions = {
    ">": {row : 0, col: 1},
    "<": {row : 0, col: -1},
    "^": {row : -1, col: 0},
    "v": {row : 1, col: 0},
  }
  const visited : {row: number, col: number}[] = []
  const isInRange = (toBeEval : number, bound : number) => {
    if(toBeEval < 0 || toBeEval >= bound) return false
    return true
  }
  while(true){
    visited.push({...currentPos})
    const symbol = factory[currentPos.row][currentPos.col]
    if(symbol === '.') return 'completed'
    const {row: offsetRow, col: offsetCol} = directions[symbol] 
    currentPos.row += offsetRow
    currentPos.col += offsetCol
    if(!isInRange(currentPos.row, rowNumbers) || !isInRange(currentPos.col, colNumbers) ) return 'broken'
    const exist = visited.find(el => el.col === currentPos.col && el.row === currentPos.row)
    if(exist){
      return 'loop'
    }

  }
}
