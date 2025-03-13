import calc from './../../src/modules/calculator.js';

describe("Calculator", () => {
    test("should add numbers", () => {
        expect(calc.add(1, 4)).toBe(5);
        expect(calc.add(4, 11)).toBe(15);
    })
    test("should subtract numbers", () => {
        
    })
    test("should multiply numbers", () => {
        
    })
});