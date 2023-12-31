import { describe, test, expect } from 'vitest';
import useMoney, { isMoney, type Money } from '../../composables/useMoney';
import useDollar from '../../composables/useDollar';
import useFranc from '../../composables/useFranc';
import useBank, { type Bank } from '../../composables/useBank';
import type { Sum } from '../../composables/useSum';
import useSum from '../../composables/useSum';
import type { Expression } from '~/composables/useExpression';

describe('useMoney', () => {
  test('同じ金額はイコールになる', () => {
    const money: Money = useMoney(10, '');

    expect(money.equals(useMoney(10, ''))).toBe(true);
    expect(money.equals(useMoney(15, ''))).toBe(false);

    expect(useDollar(5).equals(useFranc(5))).toBe(false);
  });

  test('掛け算が正しい', () => {
    const money: Money = useDollar(10);

    expect(useDollar(20).values).toEqual((money.times(2) as Money).values);
    expect(useFranc(30).values).not.toEqual((money.times(3) as Money).values);
  });

  test('金額はMoney型である', () => {
    const money: Money = useMoney(10, '');
    expect(isMoney(money)).toBe(true);
  });

  test('足し算が正しい', () => {
    const five = useDollar(5);
    const sum: Expression = five.plus(five);
    const reduced: Money = useBank().reduce(sum, 'USD');
    expect(useDollar(10).values).toEqual(reduced.values);
  });

  test('足し算はMoneyを返す', () => {
    const five = useDollar(5);
    const result: Expression = five.plus(five);

    const sum: Sum = result as Sum;

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

  test('2フランを1ドルに変換したい', () => {
    const bank: Bank = useBank();
    bank.addRate('CHF', 'USD', 0.5);

    const result: Money = bank.reduce(useFranc(2), 'USD');

    expect(result.values).toEqual(useDollar(1).values);
  });

  test('為替が見つからない場合、1になる', () => {
    expect(useBank().rate('USD', 'USD')).toEqual(1);
  });

  test('$5 + 10 CHF=$10', () => {
    const fiveBucks: Expression = useDollar(5);
    const tenFrancs: Expression = useFranc(10);

    const bank = useBank();
    bank.addRate('CHF', 'USD', 0.5);

    const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    expect(useDollar(10).values).toEqual(result.values);
  });
});
