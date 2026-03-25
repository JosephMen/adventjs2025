export function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  // Code here
  const numRows = warehouse.length;

  const copyWareHouse = warehouse.map(e => [...e])
  const dropGift = (column : number) => {
    let lowestGift = numRows - 1
    while(lowestGift >= 0 && copyWareHouse[lowestGift][column] !== '.'){
      lowestGift--
    }
    if(lowestGift < 0) return
    copyWareHouse[lowestGift][column] = '#'
  }

  for(let column of drops)
    dropGift(column)

  return copyWareHouse
}