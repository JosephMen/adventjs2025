import { describe, expect, it } from "vitest";
import { hasFourLights } from "./challenge17";

describe("hasFourLights examples from readme", () => {
  it("should return true for 4 red lights horizontally", () => {
    const board = [
      ['.', '.', '.', '.', '.'],
      ['R', 'R', 'R', 'R', '.'],
      ['G', 'G', '.', '.', '.']
    ];
    expect(hasFourLights(board)).toBe(true);
  });

  it("should return true for 4 green lights vertically", () => {
    const board = [
      ['.', 'G', '.', '.'],
      ['.', 'G', '.', '.'],
      ['.', 'G', '.', '.'],
      ['.', 'G', '.', '.']
    ];
    expect(hasFourLights(board)).toBe(true);
  });

  it("should return false when no 4 lights in a row", () => {
    const board = [
      ['R', 'G', 'R'],
      ['G', 'R', 'G'],
      ['G', 'R', 'G']
    ];
    expect(hasFourLights(board)).toBe(false);
  });
});