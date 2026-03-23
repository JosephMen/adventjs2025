export function hasFourLights(board: string[][]): boolean {

    const rowsCount = board.length
    const columnsCount = board[0]?.length ?? 0

    if(rowsCount < 4 && columnsCount < 4){
        return false
    }

    const checkLine = (line : string[]) => {
        let currentSymbol = ''
        let count = 0
        const lenLine = line.length
        for (let i = 0; i < lenLine; i++) {
            const symbol = line[i] ?? ''
            if(lenLine - i < 4 - count) return false
            if(symbol === '.') continue
            if(symbol === currentSymbol) count++
            else {
                currentSymbol = symbol
                count = 1
            }
            if(count === 4) return true
        }
        return false
    }

    const traspose = (board: string[][]) => {
        const colNumber = board[0]?.length ?? 0
        const rowNumber = board.length
        const result : string[][] = []
        for(let col = 0; col < colNumber; col++){
            const line = [] as string[]
            for(let row = 0; row < rowNumber; row++){
                line.push(board[row][col])
            }
            result.push(line)
        }
        return result
    }
    for(let line of board){
        if(checkLine(line)) return true
    }

    const trasposeBoard = traspose(board)
    for(let line of trasposeBoard){
        if(checkLine(line)) return true
    }
    return false
}