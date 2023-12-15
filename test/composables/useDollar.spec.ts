import { describe, test, expect } from 'vitest';
import useDollar from '../../composables/useDollar';
import { type Money } from '../../composables/useMoney';

describe('useMoney', () => {
  test('掛け算が正しい', () => {
    const money: Money = useDollar(10);

    expect(useDollar(20).values).toEqual(money.times(2).values);
    expect(useDollar(30).values).toEqual(money.times(3).values);
  });

  test('ドルの通過はUSDである', () => {
    const dollar: Money = useDollar(10);
    expect(dollar.values.currency).toBe('USD');
  });
});
