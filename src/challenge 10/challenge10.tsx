export function maxDepth (s: string): number {
    let currentDepth = 0
    let openBrackets = 0
    let peakDepth = 0
    const addObject = {
        '[': 1,
        ']': -1
    }
    for (let char of s) {
        if(char === "]" && openBrackets === 0) {
            return -1
        }
        currentDepth += addObject[char]
        openBrackets += addObject[char]
        if(peakDepth < currentDepth){
            peakDepth = currentDepth
        }
    }
    if (openBrackets !== 0) return -1
    return peakDepth
}