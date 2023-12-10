import { describe, test, expect } from 'vitest';
import useMoney, { type Money } from '../../composables/useMoney';

describe('useMoney', () => {
  test('同じ金額はイコールになる', () => {
    const money: Money = useMoney(10);

    expect(money.equals(useMoney(10))).toBe(true);
    expect(money.equals(useMoney(15))).toBe(false);
  });
});
