import { describe, test, expect } from 'vitest';
import useDollar from '../../composables/useDollar';
import { type Money } from '../../composables/useMoney';

describe('useDollar', () => {
  test('ドルの通過はUSDである', () => {
    const dollar: Money = useDollar(10);
    expect(dollar.values.currency).toBe('USD');
  });
});
