export default function findUnsafeGifts(warehouse: string[]): number {

    const up = {row: -1 , col: 0}
    const down = {row: 1 , col: 0}
    const right = {row: 0 , col: 1}
    const left = {row: 0, col: -1}
    const rowNumber = warehouse.length
    const colNumber = warehouse[0].length

    const isCamera = (i : number, j: number) => {
        if( i < 0 || j < 0 || i >= rowNumber || j >= colNumber ) 
            return false
        return warehouse[i][j] === '#'
    }
    const isWatched = (i : number, j : number) => {
        return isCamera(i + down.row, j + down.col) ||
        isCamera(i + up.row, j + up.col) ||
        isCamera(i + right.row, j + right.col) ||
        isCamera(i + left.row, j + left.col)
    }
    
    let count = 0
    for(let i = 0; i < rowNumber; i++){
        let row = warehouse[i] ?? ''
        for(let j = 0; j < colNumber; j++){
            const spot = row[j]
            if(spot === '*' && !isWatched(i, j)){
                count++
            }
        }
    }
    return count
}
