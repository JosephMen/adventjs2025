import { describe, expect, it } from "vitest";
import { minStepsToDeliver } from "./challenge23";

describe("minStepsToDeliver examples from readme", () => {
  it("should return 4 as total of minimum distances", () => {
    expect(
      minStepsToDeliver([
        ['S', '.', 'G'],
        ['.', '#', '.'],
        ['G', '.', '.']
      ])
    ).toBe(4);
  });

  it("should return -1 when a house is unreachable", () => {
    expect(
      minStepsToDeliver([
        ['S', '#', 'G'],
        ['#', '#', '.'],
        ['G', '.', '.']
      ])
    ).toBe(-1);
  });

  it("should return 1 for adjacent S and G", () => {
    expect(
      minStepsToDeliver([['S', 'G']])
    ).toBe(1);
  });
});