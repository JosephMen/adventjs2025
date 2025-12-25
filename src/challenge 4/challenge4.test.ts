import { describe, it, expect } from "vitest";
import { decodeSantaPin } from "./challenge4";

describe("Tests for 'Decode Santa Pins'", () => {
    it("test 1 should return 3144", () => {
        const expectedResult = "3144"
        const entry = '[1++][2-][3+][<]'
        const currentResult = decodeSantaPin(entry)

        expect(currentResult).toBe(expectedResult)

    })

    it("test 1 should return 0944", () => {
        const expectedResult = "0944"
        const entry = '[9+][0-][4][<]'
        const currentResult = decodeSantaPin(entry)

        expect(currentResult).toBe(expectedResult)

    })

    it("test 1 should return null", () => {
        const expectedResult = null
        const entry = '[1+][2-]'
        const currentResult = decodeSantaPin(entry)

        expect(currentResult).toBe(expectedResult)

    })
})
