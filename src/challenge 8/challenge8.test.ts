import { it, describe, expect } from "vitest";
import findUniqueToy from "./challenge8";
describe('Tests for challenge 8', () => {

    it('Should return "G"', () => {
        const argument = 'Gift'
        const expectedOutput = 'G'
        const currentOutput = findUniqueToy(argument)

        expect(currentOutput).toBe(expectedOutput)
    })

    it('Should return "" (empty string) ', () => {
        const argument = 'sS'
        const expectedOutput = ''
        const currentOutput = findUniqueToy(argument)

        expect(currentOutput).toBe(expectedOutput)
    })

    it('Should return "i"', () => {
        const argument = 'reindeeR'
        const expectedOutput = 'i'
        const currentOutput = findUniqueToy(argument)

        expect(currentOutput).toBe(expectedOutput)
    })

    it('extra cases', () => {
        expect(findUniqueToy('AaBbCc')).toBe('')
        expect(findUniqueToy('abcDEF') ).toBe('a')
        expect(findUniqueToy('aAaAaAF') ).toBe('F')
        expect(findUniqueToy('sTreSS') ).toBe('T')
        expect(findUniqueToy('z') ).toBe('z')
    })
})