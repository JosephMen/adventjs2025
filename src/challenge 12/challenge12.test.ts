import elfBattle from "./challenge12";
import { describe, expect, it } from "vitest";

describe.skip("tests for challenge 12", () => {
  it("returns draw for A vs B", () => {
    expect(elfBattle("A", "B")).toBe(0);
  });

  it("returns 1 for F vs B", () => {
    expect(elfBattle("F", "B")).toBe(1);
  });

  it("returns draw for AAB vs BBA", () => {
    expect(elfBattle("AAB", "BBA")).toBe(0);
  });

  it("returns 1 for AFA vs BBA", () => {
    expect(elfBattle("AFA", "BBA")).toBe(1);
  });

  it("returns 1 for AFAB vs BBAF", () => {
    expect(elfBattle("AFAB", "BBAF")).toBe(1);
  });

  it("returns 2 for AA vs FF", () => {
    expect(elfBattle("AA", "FF")).toBe(2);
  });
});

