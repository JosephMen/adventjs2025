import { it, describe, expect } from "vitest";
import { maxDepth } from "./challenge10";

describe("tests for challenge 10", () => { 

    it('for "[]" should return 1', () => {
        const input = "[]"
        const expectedOutput = 1
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })

    it('for "[[]]" should return 2', () => {
        const input = "[[]]"
        const expectedOutput = 2
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })

    it('for "[][]" should return 1', () => {
        const input = "[][]"
        const expectedOutput = 1
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })

    it('for "[[[]]]" should return 3', () => {
        const input = "[[[]]]"
        const expectedOutput = 3
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })

    it('for "[][[]][]" should return 2', () => {
        const input = "[][[]][]"
        const expectedOutput = 2
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })

    it('for "[][[]][[[]]]" should return 3', () => {
        const input = "[][[]][[[]]]"
        const expectedOutput = 3
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })


    it('for "][" should return -1', () => {
        const input = "]["
        const expectedOutput = -1
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })

    it('for "[[[" should return -1', () => {
        const input = "[[["
        const expectedOutput = -1
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })

    it('for "[]]]" should return -1', () => {
        const input = "[]]]"
        const expectedOutput = -1
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })

    it('for "[][][" should return -1', () => {
        const input = "[][]["
        const expectedOutput = -1
        const currentOutput = maxDepth(input)
        expect(currentOutput).toBe(expectedOutput)
    })

})
