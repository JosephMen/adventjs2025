export default function findUniqueToy(toy: string): string {
  // Code here

  if(toy.length == 1) return toy
  for(let i = 0; i < toy.length; i++){
    const current = toy[i]
    for(let j = 0; j < toy.length; j++) {
      if(i == j && j == toy.length - 1) return current
      if(j == i) continue 
      if(current?.toLowerCase() === toy[j]?.toLowerCase()) break
      if(j == toy.length - 1) return toy[i]
    }
  }
  return ''
}