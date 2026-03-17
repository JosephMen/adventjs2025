import { runFactory } from "./challenge13";

import { describe, expect, it } from "vitest";

describe("tests for challenge 13", () => {
  it("returns completed for >>.", () => {
    expect(runFactory([">>."])).toBe("completed");
  });

  it("returns broken for >>>", () => {
    expect(runFactory([">>>"])).toBe("broken");
  });

  it("returns loop for >><", () => {
    expect(runFactory([">><"])).toBe("loop");
  });

  it("returns completed for >>v / ..<", () => {
    expect(runFactory([">>v", "..<"])).toBe("completed");
  });

  it("returns broken for >>v / <<<", () => {
    expect(runFactory([">>v", "<<<"])).toBe("broken");
  });

  it("returns completed for >v. / ^..", () => {
    expect(runFactory([">v.", "^.."])).toBe("completed");
  });

  it("returns loop for v. / ^.", () => {
    expect(runFactory(["v.", "^."])).toBe("loop");
  });
})
