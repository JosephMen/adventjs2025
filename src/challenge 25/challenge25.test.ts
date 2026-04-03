import { describe, expect, it } from "vitest";
import { execute } from "./challenge25";

describe("execute examples from readme", () => {
  it("should return 3 for '+++'", () => {
    expect(execute('+++')).toBe(3);
  });

  it("should return -1 for '+--'", () => {
    expect(execute('+--')).toBe(-1);
  });

  it("should return 0 for '>+++[-]'", () => {
    expect(execute('>+++[-]')).toBe(0);
  });

  it("should return 3 for '>>>+{++}'", () => {
    expect(execute('>>>+{++}')).toBe(3);
  });

  it("should return 2 for '+{[-]+}+'", () => {
    expect(execute('+{[-]+}+')).toBe(2);
  });

  it("should return 0 for '{+}{+}{+}'", () => {
    expect(execute('{+}{+}{+}')).toBe(0);
  });

  it("should return 2 for '------[+]++'", () => {
    expect(execute('------[+]++')).toBe(2);
  });

  it("should return 5 for '-[++{-}]+{++++}'", () => {
    expect(execute('-[++{-}]+{++++}')).toBe(5);
  });
});