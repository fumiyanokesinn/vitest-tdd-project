import { describe, test, expect } from 'vitest';
import useFranc, { isFranc, type Franc } from '../../composables/useFranc';

describe('useMoney', () => {
  test('掛け算が正しい', () => {
    const money: Franc = useFranc(10);

    expect(useFranc(20).amount.value).toEqual(money.times(2).amount.value);
    expect(useFranc(30).amount.value).toEqual(money.times(3).amount.value);
  });

  test('フランクはFranc型である', () => {
    const franc: Franc = useFranc(10);
    expect(isFranc(franc)).toBe(true);
  });
});
