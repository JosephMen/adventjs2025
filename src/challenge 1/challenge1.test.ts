import { filterGifts } from "./challenge1";
import { describe, it, expect } from "vitest";

describe("filter strings with '#' present", () => {
  it("should return [car, ball]", () => {
    const gifts1 = ['car', 'doll#arm', 'ball', '#train']
    const result = filterGifts(gifts1)
    expect(result).toEqual(expect.arrayContaining(['ball', 'car']));
  });

  it('should return a empty list', () => {
    const gifts = ['#broken', '#rusty']
    const result = filterGifts(gifts)
    expect(result).toEqual([])
  })


  it('should return a empty list', () => {
    const gifts : string[] = []
    const result = filterGifts(gifts)
    expect(result).toEqual([])
  })
});
