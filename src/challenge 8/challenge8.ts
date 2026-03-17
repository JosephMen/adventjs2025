export default function findUniqueToy(toy: string): string {

  if(toy.length == 1) return toy
  const normalized = toy.toLowerCase()
  const letters = Array.from(normalized)

  let i = 0
  for (let currentLetter of letters){
    const results = letters.filter( letter => letter === currentLetter)
    if(results.length === 1) return toy[i]
    i++
  }
  return ''
} 