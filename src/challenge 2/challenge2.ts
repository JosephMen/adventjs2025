export function manufactureGifts(
  giftsToProduce: Array<{ toy: string, quantity: number }>
): string[] {
  // Code here

  const result = Array.from(giftsToProduce, v => {
    if(v.quantity > 0 && typeof v.quantity == 'number') return Array(v.quantity).fill(v.toy)
    return []   
  })
  return result.flat()
}