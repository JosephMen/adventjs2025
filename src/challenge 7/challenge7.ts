export default function drawTree(height: number, ornament: string, frequency: number): string {

    const width = (height * 2) - 1

    const treeArray = Array.from({length: height + 1}, () => Array(width).fill(' '))

    let currentPos = 1
    let level = 1
    for(let i = 0; i < height ; i++, level++){
        const begin = height - level
        for (let j = 0; j < (level * 2 - 1); j++, currentPos++){
            treeArray[i][begin + j] = (currentPos%frequency) == 0 
            ? ornament
            : '*'
        }
    }
    treeArray[height][height - 1] = '#'
    return treeArray.map(e => e.join('').trimEnd()).join('\n')
}
