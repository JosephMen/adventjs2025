export function drawGift(size: number, symbol: string): string {
  // Code here
  if(size < 2) return ""

  let result = []

  for(let i = 0; i < size; i++){
    let line = ''
    for(let j = 0; j < size; j++){
        if(i == 0 || i == size - 1 || j == 0 || j == size - 1)
            line += symbol
        else line += ' '
    }
    result.push(line)
  }
  return result.join('\n')
}