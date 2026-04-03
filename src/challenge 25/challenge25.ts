export function execute(code: string): number {
  
  let accumulator = 0
  let lastOpeningSquareBracketIndex = -1
  let goingToClosingCurlyBrace = false
  let goingToClosingSquareBracket = false

  for (let i = 0; i < code.length; i++) {
    const char = code[i]

    if(goingToClosingCurlyBrace){
      if(char === '}') goingToClosingCurlyBrace = false
      continue
    }
    if(goingToClosingSquareBracket){
      if(char === ']') goingToClosingSquareBracket = false
      continue
    }
    if(char === ']') {
      if(accumulator !== 0) i = lastOpeningSquareBracketIndex
      continue
    }
    if (char === '{') {
      goingToClosingCurlyBrace = accumulator === 0
    }
    if(char === '['){
      lastOpeningSquareBracketIndex = i
      goingToClosingSquareBracket = accumulator === 0
    }
    if(char === '+') accumulator++
    if(char === '-') accumulator--

  }
  return accumulator
}