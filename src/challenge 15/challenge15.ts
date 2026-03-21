type Data = Array<Record<string, string | number>>
type SortBy = string

export function drawTable(data: Data, sortBy: SortBy): string {
  // Code here

  const columnNames = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const keys = Object.keys(data[0] ?? {})

  const wides : Record<string, number> = keys.reduce((acc, curr) => {
    acc[curr] = 0
    return acc
  }, {} as Record<string, number>)

  data.forEach((row) => {
    for(let key in row){
      if(key in wides){
        const lenValue = (row[key]+'').length
        if(lenValue <= Number(wides[key])){
            continue
        }
        wides[key] = lenValue
      }
    }
  })
  
  data.sort((a,b) => {
    if(typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string'){
        return a[sortBy].localeCompare(b[sortBy],"es", { sensitivity: "base" })
    }

    return Number(a[sortBy]) - Number(b[sortBy])
  })

  let horizontalLine = '+'
  let headerLine = '|'
  let index = 0

  const finalChunkLine = '-+'
  const finalSpace = ' |'

  for(let key in wides){
    const headerLetter = columnNames[index]
    const wide = wides[key] ?? 1
    horizontalLine += '-'.repeat(wide + 1) + finalChunkLine
    headerLine += ' ' + headerLetter + ' '.repeat(wide - 1) + finalSpace
    index++
  } 

  const tableToPrint = data.map(row => {

    let line = '|'
    for(let key in row){
      const value = row[key] + ''
      const lenValue = value.length
      const widthColumn = wides[key] ?? lenValue

      line += ' ' + value + ' '.repeat(widthColumn - lenValue) + finalSpace
    }
    return line
  })

  const finalTable = [horizontalLine, headerLine, horizontalLine, ...tableToPrint, horizontalLine ]
  const result = finalTable.join('\n')
  return result
}