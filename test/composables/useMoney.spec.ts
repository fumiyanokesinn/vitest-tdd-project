import { describe, test, expect } from 'vitest';
import useMoney from '../../composables/useMoney';

describe('useMoney', () => {
  test('掛け算が正しい', () => {
    const { amount, times } = useMoney(10);
    times(2);
    expect(amount.value).to.equal(20);
  });
});
