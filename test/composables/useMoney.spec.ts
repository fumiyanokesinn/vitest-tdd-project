import { describe, test, expect } from 'vitest';
import useMoney, { type Money } from '../../composables/useMoney';

describe('useMoney', () => {
  test('掛け算が正しい', () => {
    const money: Money = useMoney(10);

    expect(useMoney(20).amount.value).to.equal(money.times(2).amount.value);
    expect(useMoney(30).amount.value).to.equal(money.times(3).amount.value);
  });

  test('同じ金額はイコールになるか', () => {
    const money: Money = useMoney(10);

    expect(money.equals(useMoney(10))).toBe(true);
    expect(money.equals(useMoney(15))).toBe(false);
  });
});
