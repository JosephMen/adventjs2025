import findUnsafeGifts from "./challenge11";
import { describe, expect, it } from "vitest";

describe.skip("tests for challenge 11", () => {
  it("returns 0 when all gifts are watched", () => {
    const warehouse = [
      ".*.",
      "*#*",
      ".*."
    ];

    expect(findUnsafeGifts(warehouse)).toBe(0);
  });

  it("returns 1 when a single gift is unwatched", () => {
    const warehouse = [
      "...",
      ".*.",
      "..."
    ];

    expect(findUnsafeGifts(warehouse)).toBe(1);
  });

  it("returns 2 when two gifts are unwatched", () => {
    const warehouse = [
      "*.*",
      "...",
      "*#*"
    ];

    expect(findUnsafeGifts(warehouse)).toBe(2);
  });

  it("returns 4 when four gifts are unwatched (diagonal only)", () => {
    const warehouse = [
      ".....",
      ".*.*.",
      "..#..",
      ".*.*.",
      "....."
    ];

    expect(findUnsafeGifts(warehouse)).toBe(4);
  });
});
