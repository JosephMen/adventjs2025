import { describe, expect, it } from "vitest";
import { canEscape } from "./challenge22";

describe.skip("canEscape examples from readme", () => {
  it("should return true when path exists", () => {
    expect(
      canEscape([
        ['S', '.', '#', '.'],
        ['#', '.', '#', '.'],
        ['.', '.', '.', '.'],
        ['#', '#', '#', 'E']
      ])
    ).toBe(true);
  });

  it("should return false when path is blocked", () => {
    expect(
      canEscape([
        ['S', '#', '#'],
        ['.', '#', '.'],
        ['.', '#', 'E']
      ])
    ).toBe(false);
  });

  it("should return true when start adjacent to exit", () => {
    expect(
      canEscape([
        ['S', 'E']
      ])
    ).toBe(true);
  });

  it("should return true on larger maze with valid path", () => {
    expect(
      canEscape([
        ['S', '.', '.', '.', '.'],
        ['#', '#', '#', '#', '.'],
        ['.', '.', '.', '.', '.'],
        ['.', '#', '#', '#', '#'],
        ['.', '.', '.', '.', 'E']
      ])
    ).toBe(true);
  });

  it("should return false when exit unreachable due to walls", () => {
    expect(
      canEscape([
        ['S', '.', '.'],
        ['.', '.', '.'],
        ['#', '#', '#'],
        ['.', '.', 'E']
      ])
    ).toBe(false);
  });
});