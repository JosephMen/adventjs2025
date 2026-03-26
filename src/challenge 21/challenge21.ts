export function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  // Code here

  const numRows = warehouse.length
  const numCols = warehouse[0].length
  const dropGift = (warehouse: string[][] ,column : number) => {
    const copyWarehouse = warehouse.map(e => [...e])
    let lowestGift = numRows - 1
    while(lowestGift >= 0 && copyWarehouse[lowestGift][column] !== '.'){
      lowestGift--
    }
    if(lowestGift < 0) return copyWarehouse
    copyWarehouse[lowestGift][column] = '#'
    return copyWarehouse
  }

  const checkLastLine = (warehouseToCheck: string[][]) => {
    const lastLine = warehouseToCheck[numRows - 1]
    const result = []

    for(let element of lastLine){
      if (element !== '#') {
        return warehouseToCheck
      }
    }

    for(let i = 0; i < numRows - 1; i++){
      result.push(warehouseToCheck[i])
    }
   
    const clearLine = Array.from({length: numCols}).fill('.')
    result.unshift(clearLine)
    return result

  }
  let newWareHouse = warehouse.map(e => [...e])
  for(let drop of drops){
    newWareHouse = dropGift(newWareHouse, drop)
    newWareHouse = checkLastLine(newWareHouse)
  }
  return newWareHouse
}
