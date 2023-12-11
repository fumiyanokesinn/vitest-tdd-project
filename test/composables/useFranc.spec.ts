import { describe, test, expect } from 'vitest';
import useFranc, {
  isFranc,
  type Franc,
  FRANC_CURRENCY,
} from '../../composables/useFranc';

describe('useMoney', () => {
  test('掛け算が正しい', () => {
    const money: Franc = useFranc(10);

    expect(useFranc(20).values).toEqual(money.times(2).values);
    expect(useFranc(30).values).toEqual(money.times(3).values);
  });

  test('フランクはFranc型である', () => {
    const franc: Franc = useFranc(10);
    expect(isFranc(franc)).toBe(true);
  });

  test('ドルの通過はCHFである', () => {
    const dollar: Franc = useFranc(10);
    expect(dollar.values.currency).toBe(FRANC_CURRENCY);
  });
});
