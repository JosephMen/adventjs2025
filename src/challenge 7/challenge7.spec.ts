import drawTree from "./challenge7";
import { describe, it, expect } from "vitest";

const space = ' '
const asterisk = '*'
describe('Test for challenge 7', () => {
    it('Should return a 5 levels tree',  () => {
        const ornament = 'o'
        const treeArray = [
            [' ', ' ', ' ', ' ', '*'],
            [' ', ' ', ' ', 'o', '*', 'o'],
            [' ', ' ', '*', 'o', '*', 'o', '*'],
            [' ', 'o', '*', 'o', '*', 'o', '*', 'o'],
            ['*', 'o', '*', 'o', '*', 'o', '*', 'o', '*'],
            [' ', ' ', ' ', ' ', '#'],
        ]

        const expected = treeArray.map(e => e.join('')).join('\n')

        const currentOutput = drawTree(5, 'o', 2)

        expect(currentOutput).toBe(expected)
    })

    it('Should return a 3 levels tree',  () => {
        const ornament = 'o'
        const treeArray = [
            [' ', ' ', '*'],
            [' ', '*', '@', '*'],
            ['*', '@', '*', '*', '@'],
            [' ', ' ', '#'],
        ]

        const expected = treeArray.map(e => e.join('')).join('\n')

        const currentOutput = drawTree(3, '@', 3)

        expect(currentOutput).toBe(expected)
    })

    it('Should return a 4 levels tree',  () => {
        const ornament = 'o'
        const treeArray = [
            [' ', ' ', ' ', '+'],
            [' ', ' ', '+', '+', '+'],
            [' ', '+', '+', '+', '+', '+'],
            ['+', '+', '+', '+', '+', '+', '+'],
            [' ', ' ', ' ', '#'],

        ]

        const expected = treeArray.map(e => e.join('')).join('\n')

        const currentOutput = drawTree(4, '+', 1)

        expect(currentOutput).toBe(expected)
    })
})