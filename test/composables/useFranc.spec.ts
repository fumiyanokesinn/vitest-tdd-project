import { describe, test, expect } from 'vitest';
import useFranc, { FRANC_CURRENCY } from '../../composables/useFranc';
import { type Money } from '../../composables/useMoney';

describe('useFranc', () => {
  test('ドルの通過はCHFである', () => {
    const dollar: Money = useFranc(10);
    expect(dollar.values.currency).toBe(FRANC_CURRENCY);
  });
});
