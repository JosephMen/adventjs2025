import { describe, it, expect } from "vitest";
import { drawGift } from "./challenge3";

describe("Challenge 3 tests", () => {

    it("square of 4x4 with * ", () => {
        const expected = `****
*  *
*  *
****`
        const outcome = drawGift(4, "*")
        expect(outcome).toBe(expected)
    })

    it("square of 3x3 with # ", () => {
        const expected = `###
# #
###`
        const outcome = drawGift(3, "#")
        expect(outcome).toBe(expected)
    })

    it("square of 2x2 with - ", () => {
        const expected = `--
--`
        const outcome = drawGift(2, "-")
        expect(outcome).toBe(expected)
    })

    it("square of 1x1 with + ", () => {
        const expected = ""
        const outcome = drawGift(1, "-")
        expect(outcome).toBe(expected)
    })
})
