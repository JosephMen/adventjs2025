import { describe, expect, it } from "vitest";
import { drawTable } from "./challenge15.js";

describe.skip("drawTable examples from readme", () => {
  it("should draw table sorted by name", () => {
    const result = drawTable(
      [
        { name: "Charlie", city: "New York" },
        { name: "Alice", city: "London" },
        { name: "Bob", city: "Paris" },
      ],
      "name"
    );

    expect(result).toBe(
      "+---------+----------+\n" +
      "| A       | B        |\n" +
      "+---------+----------+\n" +
      "| Alice   | London   |\n" +
      "| Bob     | Paris    |\n" +
      "| Charlie | New York |\n" +
      "+---------+----------+"
    );
  });

  it("should draw table sorted by quantity", () => {
    const result = drawTable(
      [
        { gift: "Book", quantity: 5 },
        { gift: "Music CD", quantity: 1 },
        { gift: "Doll", quantity: 10 },
      ],
      "quantity"
    );

    expect(result).toBe(
      "+----------+----+\n" +
      "| A        | B  |\n" +
      "+----------+----+\n" +
      "| Music CD | 1  |\n" +
      "| Book     | 5  |\n" +
      "| Doll     | 10 |\n" +
      "+----------+----+"
    );
  });
});
