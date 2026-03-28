export function minStepsToDeliver(map: string[][]): number {
  
  const numRows = map.length
  const numCols = map[0].length
  const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  type Cell = [number, number]
  type Node = {cell: Cell, steps: number}
  type Queue = Node[]

  const findSanta = () : Cell => {
    for(let i = 0; i < numRows; i++){
      const indexSanta = map[i].indexOf('S')
      if(indexSanta !== -1) return [i, indexSanta]
    }
    return [0, 0]
  }
  const findGifts = () : Cell[] => {
    const gifts: Cell[] = [];
    for(let i = 0; i < numRows; i++){
      for(let j = 0; j < numCols; j++){
        if(map[i][j] === 'G') gifts.push([i, j])
      }
    }
    return gifts
  }

  const breadthFirstSearch = (q: Queue, targetCell: Cell, visited: boolean[][]): number => {
    while(q.length > 0){
      const {cell, steps} = q.shift() as Node
      const [row, col] = cell
      visited[row][col] = true
      if(row === targetCell[0] && col === targetCell[1]) return steps

      for(let [dRow, dCol] of moves){
        const newRow = row + dRow
        const newCol = col + dCol
        if(newRow < 0 || newRow >= numRows || newCol < 0 || newCol >= numCols) continue
        if(map[newRow][newCol] === '#' || visited[newRow][newCol]) continue
        visited[newRow][newCol] = true
        q.push({cell: [newRow, newCol], steps: steps + 1})
      }

    }
    return -1
  }
  const santaCell = findSanta(map)
  const giftsCells = findGifts(map)
  let sumOfSteps = 0
  for(let giftCell of giftsCells){
    const visited = new Array(numRows).fill(0).map(() => new Array(numCols).fill(false))
    const q: Queue = [{cell: santaCell, steps: 0}]
    const steps = breadthFirstSearch(q, giftCell, visited)
    if(steps === -1) return -1
    sumOfSteps += steps
  }
  return sumOfSteps
}
