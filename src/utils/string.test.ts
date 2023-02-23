import { truncate } from "./string";

describe("truncate", () => {
    it("should truncate a string when it is longer than the specified length", () => {
        expect(truncate("Hello, World!", 5)).toBe("Hello...");
    })
    it("should not truncate a string when it is shorter than the specified length", () => {
        expect(truncate("Hello, World!", 20)).toBe("Hello, World!");
    })
});