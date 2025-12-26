import {describe, expect, it} from 'vitest'
import timeUntilTakeOff from './challenge5'

describe("Tests for challenge 5", () => {

    const takeoff = '2025*12*25@00|00|00 NP'
    it("It should returns 30", () => {
        const expected = 30
        const currentResult = timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)

        expect(currentResult).toBe(expected)
    })

    it("It should returns 0", () => {
        const expected = 0
        const currentResult = timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)

        expect(currentResult).toBe(expected)
    })

    it("It should returns 12", () => {
        const expected = -12
        const currentResult = timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)

        expect(currentResult).toBe(expected)
    })
})