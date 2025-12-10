export function filterGifts(gifts: string[]): string[] {
  // Code here
  const filtered = gifts.filter(gits => !gifts.includes("#"))

  return filtered
}