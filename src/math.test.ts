import { sum } from './math';

describe('math functions', () => {
    it('should correctly sum two numbers', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(-1, 1)).toBe(0);
    });
});
