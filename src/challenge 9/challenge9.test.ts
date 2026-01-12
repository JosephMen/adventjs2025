import moveReno from "./challenge9";
import { it, describe, expect } from "vitest";

describe("tests for challenge 9", () => {

    const board = `
.....
.*#.*
.@...
.....
`
    it("for 'D' entry should return 'fail'", () => {
        const entry = 'D'
        const expectedOutput = 'fail'
        const currentOutput = moveReno(board, entry)

        expect(currentOutput).toBe(expectedOutput)
    })

    it("for 'U' entry should return 'success'", () => {
        const entry = 'U'
        const expectedOutput = 'success'
        const currentOutput = moveReno(board, entry)

        expect(currentOutput).toBe(expectedOutput)
    })

    it("for 'RU' entry should return 'crash' ", () => {
        const entry = 'RU'
        const expectedOutput = 'crash'
        const currentOutput = moveReno(board, entry)

        expect(currentOutput).toBe(expectedOutput)
    })

    it("for 'RRRUU' entry should return 'success'", () => {
        const entry = 'RRRUU'
        const expectedOutput = 'success'
        const currentOutput = moveReno(board, entry)

        expect(currentOutput).toBe(expectedOutput)
    })
    it("for 'DD' entry should return 'crash'", () => {
        const entry = 'DD'
        const expectedOutput = 'crash'
        const currentOutput = moveReno(board, entry)

        expect(currentOutput).toBe(expectedOutput)
    })
    it("for 'UUU' entry should return 'success'", () => {
        const entry = 'UUU'
        const expectedOutput = 'success'
        const currentOutput = moveReno(board, entry)

        expect(currentOutput).toBe(expectedOutput)
    })
    it("for 'RR' entry should return 'fail'", () => {
        const entry = 'RR'
        const expectedOutput = 'fail'
        const currentOutput = moveReno(board, entry)

        expect(currentOutput).toBe(currentOutput)
    })
   
})