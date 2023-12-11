import { describe, test, expect } from 'vitest';
import useDollar, { isDollar, type Dollar } from '../../composables/useDollar';

describe('useMoney', () => {
  test('掛け算が正しい', () => {
    const money: Dollar = useDollar(10);

    expect(useDollar(20).values).toEqual(money.times(2).values);
    expect(useDollar(30).values).toEqual(money.times(3).values);
  });

  test('ドルはDollar型である', () => {
    const dollar: Dollar = useDollar(10);
    expect(isDollar(dollar)).toBe(true);
  });

  test('ドルの通過はUSDである', () => {
    const dollar: Dollar = useDollar(10);
    expect(dollar.values.currency).toBe('USD');
  });
});
