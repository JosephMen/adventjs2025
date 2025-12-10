export function filterGifts(gifts: string[]): string[] {
  // Code here
  const filtered = gifts.filter(gift => !gift.includes("#"))

  return filtered
}