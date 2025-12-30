export type Glove = { hand: 'L' | 'R'; color: string }

export default function matchGloves(gloves: Glove[]): string[] {
  // Code here

  const object = {}
  const arrayReturn = []
  for(let glove of gloves){
    if(!object[glove.color]){
      object[glove.color] = {hand: glove.hand, count: 1}
      continue
    }
    if(object[glove.color].hand !== glove.hand){
      arrayReturn.push(glove.color)
      if(--object[glove.color].count == 0) 
        delete object[glove.color]
      continue
    }
    object[glove.color].count++
  }
  return arrayReturn
}