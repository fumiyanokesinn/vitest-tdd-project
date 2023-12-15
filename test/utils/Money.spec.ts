import { describe, test, expect } from 'vitest';
import Money from '../../utils/Money';

describe('useMoney', () => {
  test('dollarが正しいこと', () => {
    const five = Money.dollar(5);
    five.times(2);
    expect(10).toEqual(five.amount);
  });

  // test('francが正しいこと', () => {
  //   const five = Money.franc(5);

  //   expect(Money.franc(10)).toEqual(five.times(2));
  //   expect(Money.franc(15)).toEqual(five.times(3));
  // });

  // test('equals()が正しいこと', () => {
  //   expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  //   expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  //   expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
  //   expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  //   expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  // });
});
