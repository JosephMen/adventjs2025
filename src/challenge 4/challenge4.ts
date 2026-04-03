export function decodeSantaPin(code: string): string | null {

  let result = ''
  const ops = {
    '+': 1,
    '-': -1
  }

  function useRegex(input : string) : string[] {
    let regex = /\[(.*?)\]/g;
    const array = [...input.matchAll(regex)]
    .map(match => match[1] ?? '')
    .filter(Boolean)
    return array
  }
  const digits = useRegex(code)

  if(digits.length < 4) return null

  let lastChar = Number(digits[0])

  for(let digit of digits){
    if(digit === '<'){
      result += lastChar
      continue
    }

    let number = Number(digit[0])
    for(let i = 1; i < digit.length; i++) {
      const char = digit[i]
      number += ops[char as keyof typeof ops]
      number = (number + 10) % 10
    }
    lastChar = number
    result += number
  }
  return result
}

const result = decodeSantaPin('[1++][2-][3+][<]')

console.log({result})