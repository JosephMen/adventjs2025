export function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  // Code here

  const numRows = warehouse.length
  const numCols = warehouse[0].length
  const dropGift = (warehouseToMod: string[][] ,column : number) => {
    let lowestGift = numRows - 1
    while(lowestGift >= 0 && warehouseToMod[lowestGift][column] !== '.'){
      lowestGift--
    }
    if(lowestGift < 0) return warehouseToMod
    warehouseToMod[lowestGift][column] = '#'
    return warehouseToMod
  }

  const checkLastLine = (warehouseToCheck: string[][]) => {
    const lastLine = warehouseToCheck[numRows - 1]

    if(lastLine.some(e => e !== '#')) return warehouseToCheck

    warehouseToCheck.splice(numRows - 1)
   
    const clearLine = new Array(numCols).fill('.')
    warehouseToCheck.unshift(clearLine)
    return warehouseToCheck

  }
  let newWareHouse = warehouse.map(e => [...e])
  for(let drop of drops){
    newWareHouse = dropGift(newWareHouse, drop)
    newWareHouse = checkLastLine(newWareHouse)

    newWareHouse.forEach(e => console.log(e))
    console.log('------------------')
  }
  return newWareHouse
}

const table = [
  [ ".",".","#" ],
  [ "#",".","#" ],
  [ "#",".","#" ]
]

const result = clearGifts(table, [0, 1, 2])

// result.forEach(e => console.log(e))
