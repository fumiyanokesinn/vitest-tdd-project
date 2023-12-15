import { describe, test, expect } from 'vitest';
import useMoney, { isMoney, type Money } from '../../composables/useMoney';
import useDollar from '../../composables/useDollar';
import useFranc from '../../composables/useFranc';

describe('useMoney', () => {
  test('同じ金額はイコールになる', () => {
    const money: Money = useMoney(10, '');

    expect(money.equals(useMoney(10, ''))).toBe(true);
    expect(money.equals(useMoney(15, ''))).toBe(false);

    expect(useDollar(5).equals(useFranc(5))).toBe(false);
  });

  test('掛け算が正しい', () => {
    const money: Money = useDollar(10);

    expect(useDollar(20).values).toEqual(money.times(2).values);
    expect(useFranc(30).values).not.toEqual(money.times(3).values);
  });

  test('金額はMoney型である', () => {
    const money: Money = useMoney(10, '');
    expect(isMoney(money)).toBe(true);
  });
});
