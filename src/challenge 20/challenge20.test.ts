import { describe, expect, it } from "vitest";
import { dropGifts } from "./challenge20";

describe("dropGifts examples from readme", () => {
  it("should drop gift in column 0", () => {
    const warehouse = [
      ['.', '.', '.'],
      ['.', '#', '.'],
      ['#', '#', '.']
    ];
    const result = dropGifts(warehouse, [0]);
    expect(result).toEqual([
      ['.', '.', '.'],
      ['#', '#', '.'],
      ['#', '#', '.']
    ]);
  });

  it("should drop gifts in columns 0 and 2", () => {
    const warehouse = [
      ['.', '.', '.'],
      ['#', '#', '.'],
      ['#', '#', '#']
    ];
    const result = dropGifts(warehouse, [0, 2]);
    expect(result).toEqual([
      ['#', '.', '.'],
      ['#', '#', '#'],
      ['#', '#', '#']
    ]);
  });

  it("should drop gifts in columns 0, 1, 2", () => {
    const warehouse = [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.']
    ];
    const result = dropGifts(warehouse, [0, 1, 2]);
    expect(result).toEqual([
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['#', '#', '#']
    ]);
  });

  it("should ignore drops when column is full", () => {
    const warehouse = [
      ['#', '#'],
      ['#', '#']
    ];
    const result = dropGifts(warehouse, [0, 0]);
    expect(result).toEqual([
      ['#', '#'],
      ['#', '#']
    ]);
  });
});