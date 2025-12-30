import {describe, expect, it} from 'vitest'
import matchGloves, { type Glove } from './challenge6'

describe("Test for challenge 6", () => {
    it("Should return red and green only", () => {
        const gloves : Glove[] = [
            { hand: 'L', color: 'red' },
            { hand: 'R', color: 'red' },
            { hand: 'R', color: 'green' },
            { hand: 'L', color: 'blue' },
            { hand: 'L', color: 'green' }
        ]
        const expectedOutput = ['red', 'green']

        const result = matchGloves(gloves)

        expect(result).toEqual(expectedOutput)
    })

    it("Should return gold and gold", () => {
        const gloves : Glove[] = [
            { hand: 'L', color: 'gold' },
            { hand: 'R', color: 'gold' },
            { hand: 'L', color: 'gold' },
            { hand: 'L', color: 'gold' },
            { hand: 'R', color: 'gold' }
        ]
        const expectedOutput = ['gold', 'gold']

        const result = matchGloves(gloves)

        expect(result).toEqual(expectedOutput)
    })

    it("Should return an empty list", () => {
        const gloves : Glove[] = [
            { hand: 'L', color: 'red' },
            { hand: 'R', color: 'green' },
            { hand: 'L', color: 'blue' }
        ]
        const expectedOutput : string[] = []

        const result = matchGloves(gloves)

        expect(result).toEqual(expectedOutput)
    })

    it("Should return ['red', 'green']", () => {
        const gloves : Glove[] = [
            { hand: 'L', color: 'green' },
            { hand: 'L', color: 'red' },
            { hand: 'R', color: 'red' },
            { hand: 'R', color: 'green' }
        ]
        const expectedOutput : string[] = ['red', 'green']

        const result = matchGloves(gloves)

        expect(result).toEqual(expectedOutput)
    })

    it("Should return ['silver', 'silver']", () => {
        const gloves : Glove[] = [
            { hand: 'L', color: 'silver' },
            { hand: 'L', color: 'silver' },
            { hand: 'R', color: 'silver' },
            { hand: 'R', color: 'silver' },
            { hand: 'R', color: 'silver' }
        ]
        const expectedOutput : string[] = ['silver', 'silver']

        const result = matchGloves(gloves)

        expect(result).toEqual(expectedOutput)
    })
})
