import { describe, expect, it } from "vitest";
import { hasFourInARow } from "./challenge18";

describe("hasFourInARow examples from readme", () => {
  it("should return true for 4 red lights in diagonal ↘", () => {
    const board = [
      ['R', '.', '.', '.'],
      ['.', 'R', '.', '.'],
      ['.', '.', 'R', '.'],
      ['.', '.', '.', 'R']
    ];
    expect(hasFourInARow(board)).toBe(true);
  });

  it("should return true for 4 green lights in diagonal ↙", () => {
    const board = [
      ['.', '.', '.', 'G'],
      ['.', '.', 'G', '.'],
      ['.', 'G', '.', '.'],
      ['G', '.', '.', '.']
    ];
    expect(hasFourInARow(board)).toBe(true);
  });

  it("should return true for 4 red lights horizontally", () => {
    const board = [
      ['R', 'R', 'R', 'R'],
      ['G', 'G', '.', '.'],
      ['.', '.', '.', '.'],
      ['.', '.', '.', '.']
    ];
    expect(hasFourInARow(board)).toBe(true);
  });

  it("should return false when no 4 consecutive lights of same color", () => {
    const board = [
      ['R', 'G', 'R'],
      ['G', 'R', 'G'],
      ['G', 'R', 'G']
    ];
    expect(hasFourInARow(board)).toBe(false);
  });
});