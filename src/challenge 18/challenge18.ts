export function hasFourInARow(board: string[][]): boolean {

    const rowsCount = board.length
    const columnsCount = board[0]?.length ?? 0

    const checkHorizontal = (row: number, col : number, currentSymbol : string) => {
        if(columnsCount - col < 4) return false
        let line = board[row]
        let count = 0;
        for(let j = col; j < 4; j++){
            const symbol = line[j]
            if(currentSymbol !== symbol) return false
            if((count + 1) === 4) return true
            count++
        }
        return false
    }

    const checkVertical = (row: number, col : number, currentSymbol : string) => {
        if(rowsCount - row < 4) return false
        let count = 0
        for(let i = row; i < 4; i++){
            const symbol = board[i][col]
            if(currentSymbol !== symbol) return false
            if((count + 1) === 4) return true
            count++
        }
        return false
    }

    const checkLeftDown = (row: number, col: number, currentSymbol: string) => {
        if(col < 3 || (rowsCount - row < 4)) return false
        let count = 0
        for(let i = 0; i < 4; i++){
                const symbol = board[row + i][col - i]
                console.log({symbol, currentSymbol, row: row + i, col: col - i})
                if(currentSymbol !== symbol) return false
                if((count + 1) === 4) return true
                count++
        }
        return false
    }
    const checkRightDown = (row: number, col: number, currentSymbol: string) => {
        if((columnsCount - col) < 4 || (rowsCount - row < 4)) return false
        let count = 0
        for(let i = 0; i < 4; i++){
            const symbol = board[row + i][col + i]
            if(currentSymbol !== symbol) return false
            if((count + 1) === 4) return true
            count++
        }
        return false

    }
    
    for(let row = 0; row < rowsCount; row++){
        for(let col = 0; col < columnsCount; col++){
            const currentSymbol = board[row][col] as string
            if(currentSymbol === '.') continue
            if(checkHorizontal(row, col, currentSymbol)) return true
            if(checkVertical(row, col, currentSymbol)) return true
            if(checkLeftDown(row, col, currentSymbol)) return true
            if(checkRightDown(row, col, currentSymbol)) return true

        }
    }
    return false
}

const board = [
      ['.', '.', '.', 'G'],
      ['.', '.', 'G', '.'],
      ['.', 'G', '.', '.'],
      ['G', '.', '.', '.']
    ]
hasFourInARow(board)
