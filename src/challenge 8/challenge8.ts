export default function findUniqueToy(toy: string): string {
  // Code here

  if(toy.length == 1) return toy
  for(let i = 0; i < toy.length; i++){
    if(i == toy.length - 1) return ''
    for(let j = 0; j < toy.length; j++) {
        if(j == i) continue 
        if(toy[i]?.toLowerCase() === toy[j]?.toLowerCase()) break
        if(j == toy.length - 1) return toy[i]
    }
  }
}