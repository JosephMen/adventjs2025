import {manufactureGifts} from './challenge2'
import { describe, it, expect } from "vitest";


describe("Challenge 2 tests",() => {
    
    it('Build Array from 1', () => {
        const production = [
            { toy: 'car', quantity: 3 },
            { toy: 'doll', quantity: 1 },
            { toy: 'ball', quantity: 2 }
        ]
        const expectResult = ['car', 'car', 'car', 'doll', 'ball', 'ball']
        const result = manufactureGifts(production)
        expect(result).toEqual(expectResult)
    })

    it('Build Array from 2', () => {
        const production = [
            { toy: 'train', quantity: 0 }, // not manufactured
            { toy: 'bear', quantity: -2 }, // neither
            { toy: 'puzzle', quantity: 1 }
        ]
        const expectResult = ['puzzle']
        const result = manufactureGifts(production)
        expect(result).toEqual(expectResult)
    })

    it('Build Array from 3', () => {
        const production = []
        const result = manufactureGifts(production)
        expect(result).toEqual([])
    })
})