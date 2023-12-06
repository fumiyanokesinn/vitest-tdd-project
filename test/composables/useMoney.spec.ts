import { describe, test, expect } from 'vitest';

describe('useMoney', () => {
  test('掛け算が正しい'),
    () => {
      const { amount, times } = useMoney(10);
      times(2);
      expect(amount).to.equal(20);
    };
});
