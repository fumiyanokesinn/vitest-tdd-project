import { describe, test, expect } from 'vitest';
import useMoney, { isMoney, type Money } from '../../composables/useMoney';
import useDollar from '../../composables/useDollar';
import useFranc from '../../composables/useFranc';
import useBank from '../../composables/useBank';
import type { Sum } from '../../composables/useSum';
import useSum from '../../composables/useSum';

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

  test('足し算が正しい', () => {
    const five = useDollar(5);
    const sum: Sum = five.plus(five);
    const reduced: Money = useBank().reduce(sum, 'USD');
    expect(useDollar(10).values).toEqual(reduced.values);
  });

  test('足し算はMoneyを返す', () => {
    const five = useDollar(5);
    const result: Sum = five.plus(five);

    const sum: Sum = result;

    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
  });

  test('reduceは足し算の結果を返す', () => {
    const sum: Sum = useSum(useDollar(3), useDollar(4));
    const reduced: Money = useBank().reduce(sum, 'USD');

    const seven: Money = useDollar(7);
    expect(reduced.values).toEqual(seven.values);
  });

  test('reduceはMoneyでも動かせる', () => {
    const one = useDollar(1);
    const reduced: Money = useBank().reduce(one, 'USD');

    expect(reduced.values).toEqual(useDollar(1).values);
  });
});
