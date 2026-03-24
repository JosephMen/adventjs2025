import { describe, expect, it } from "vitest";
import { revealSantaRoute } from "./challenge19";

describe("revealSantaRoute examples from readme", () => {
  it("should reconstruct the correct route and ignore unrelated segments", () => {
    expect(
      revealSantaRoute([
        ["MEX", "CAN"],
        ["UK", "GER"],
        ["CAN", "UK"],
      ])
    ).toEqual(["MEX", "CAN", "UK", "GER"]);
  });

  it("should handle another normal route", () => {
    expect(
      revealSantaRoute([
        ["USA", "BRA"],
        ["JPN", "PHL"],
        ["BRA", "UAE"],
        ["UAE", "JPN"],
        ["CMX", "HKN"],
      ])
    ).toEqual(["USA", "BRA", "UAE", "JPN", "PHL"]);
  });

  it("should return the contiguous route when there are unrelated segments", () => {
    expect(
      revealSantaRoute([
        ["STA", "HYD"],
        ["ESP", "CHN"],
      ])
    ).toEqual(["STA", "HYD"]);
  });
});
