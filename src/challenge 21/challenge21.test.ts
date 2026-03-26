import { describe, expect, it } from "vitest";
import { clearGifts } from "./challenge21";

describe("clearGifts examples from readme", () => {
  it("should clear a complete row when gift is placed", () => {
    const warehouse = [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['#', '.', '#']
    ];
    const result = clearGifts(warehouse, [1]);
    expect(result).toEqual([
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.']
    ]);
  });

  it("should handle multiple drops and clear row when complete", () => {
    const warehouse = [
      ['.', '.', '#'],
      ['#', '.', '#'],
      ['#', '.', '#']
    ];
    const result = clearGifts(warehouse, [0, 1, 2]);
    expect(result).toEqual([
      ['.', '.', '#'],
      ['#', '.', '#'],
      ['#', '.', '#']
    ]);
  });
});