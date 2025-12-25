export function decodeSantaPin(code: string): string | null {

  let result = ''
  let countDigits = 0
  let currentNumber = 0
  for(let i = 0; i < code.length; i++){
    const char = code[i]

    if(char == '[') countDigits++
    else if(char == '<') continue
    else if(char == ']') result += currentNumber
    else if(char == '+') currentNumber = (currentNumber + 1) % 10
    else if(char == '-') currentNumber = (10 + currentNumber - 1) % 10
    else{
        currentNumber  = Number.parseInt(char)
    }
  }
  if(countDigits < 4) return null
  return result
}