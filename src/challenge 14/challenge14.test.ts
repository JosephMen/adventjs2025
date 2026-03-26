import { describe, expect, it } from "vitest";
import { findGiftPath } from "./challenge14";

describe.skip("findGiftPath", () => {
  const workshop = {
    storage: {
      shelf: {
        box1: "train",
        box2: "switch",
      },
      box: "car",
    },
    gift: "doll",
  };

  it("should find train path", () => {
    expect(findGiftPath(workshop, "train")).toEqual(["storage", "shelf", "box1"]);
  });

  it("should find switch path", () => {
    expect(findGiftPath(workshop, "switch")).toEqual(["storage", "shelf", "box2"]);
  });

  it("should find car path", () => {
    expect(findGiftPath(workshop, "car")).toEqual(["storage", "box"]);
  });

  it("should find doll path", () => {
    expect(findGiftPath(workshop, "doll")).toEqual(["gift"]);
  });

  it("should return empty for missing value", () => {
    expect(findGiftPath(workshop, "plane")).toEqual([]);
  });
});
