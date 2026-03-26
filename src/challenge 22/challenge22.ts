export function canEscape(maze: string[][]): boolean {
  // Implement challenge 22 here

  const rows = maze.length
  const cols = maze[0].length
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]


  const findStart = () => {
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        if(maze[i][j] === 'S') return [i, j]
      }  
    }
    return [0,0]
  }

  const backTrackSearch = (row: number, col: number, visited: boolean[][]): boolean => {

    visited[row][col] = true
    for(let [dRow, dCol] of directions){
      const newRow = row + dRow
      const newCol = col + dCol 
      if(newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue
      if(maze[newRow][newCol] === 'E') return true
      if(maze[newRow][newCol] === '#' || visited[newRow][newCol]) continue
      if(backTrackSearch(newRow, newCol, visited)) return true
      visited[newRow][newCol] = false
    }

    return false
  }
  const [startRow, startCol] = findStart()
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false))
  return backTrackSearch(startRow, startCol, visited)
}

const table = [
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E']
]

const result = canEscape(table)
console.log(result)