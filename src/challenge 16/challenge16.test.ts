import {packGifts} from "./challenge16";
import { describe, expect, it } from "vitest";

describe("tests for challenge 16", () => {
  it("returns 2 sleighs for [2, 3, 4, 1] with capacity 5", () => {
    expect(packGifts([2, 3, 4, 1], 5)).toBe(2);
  });

  it("returns 3 sleighs for [3, 3, 2, 1] with capacity 3", () => {
    expect(packGifts([3, 3, 2, 1], 3)).toBe(3);
  });

  it("returns 2 sleighs for [1, 1, 1, 1] with capacity 2", () => {
    expect(packGifts([1, 1, 1, 1], 2)).toBe(2);
  });

  it("returns null when a gift exceeds capacity [5, 6, 1] with capacity 5", () => {
    expect(packGifts([5, 6, 1], 5)).toBe(null);
  });

  it("returns 0 sleighs for empty array", () => {
    expect(packGifts([], 10)).toBe(0);
  });
});

