import { describe, expect, it } from "vitest";
import { isTreesSynchronized } from "./challenge24";

describe("isTreesSynchronized examples from readme", () => {
  it("should return [true, '🎄'] when trees are mirrors", () => {
    const tree1 = {
      value: '🎄',
      left: { value: '⭐' },
      right: { value: '🎅' }
    };

    const tree2 = {
      value: '🎄',
      left: { value: '🎅' },
      right: { value: '⭐' }
    };

    expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '🎄']);
  });

  it("should return [false, '🎄'] when trees have different right node", () => {
    const tree1 = {
      value: '🎄',
      left: { value: '⭐' },
      right: { value: '🎅' }
    };

    const tree3 = {
      value: '🎄',
      left: { value: '🎅' },
      right: { value: '🎁' }
    };

    expect(isTreesSynchronized(tree1, tree3)).toEqual([false, '🎄']);
  });

  it("should return [false, '🎄'] when trees are identical (not mirrors)", () => {
    const tree1 = {
      value: '🎄',
      left: { value: '⭐' },
      right: { value: '🎅' }
    };

    const tree4 = {
      value: '🎄',
      left: { value: '⭐' },
      right: { value: '🎅' }
    };

    expect(isTreesSynchronized(tree1, tree4)).toEqual([false, '🎄']);
  });

  it("should return [false, '🎅'] when root values differ", () => {
    const tree1 = { value: '🎅' };
    const tree2 = { value: '🧑‍🎄' };

    expect(isTreesSynchronized(tree1, tree2)).toEqual([false, '🎅']);
  });
});