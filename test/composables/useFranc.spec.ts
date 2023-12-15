import { describe, test, expect } from 'vitest';
import useFranc, { FRANC_CURRENCY } from '../../composables/useFranc';
import { type Money } from '../../composables/useMoney';

describe('useMoney', () => {
  test('掛け算が正しい', () => {
    const money: Money = useFranc(10);

    expect(useFranc(20).values).toEqual(money.times(2).values);
    expect(useFranc(30).values).toEqual(money.times(3).values);
  });

  test('ドルの通過はCHFである', () => {
    const dollar: Money = useFranc(10);
    expect(dollar.values.currency).toBe(FRANC_CURRENCY);
  });
});
