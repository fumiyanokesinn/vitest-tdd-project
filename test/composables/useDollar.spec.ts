import { describe, test, expect } from 'vitest';
import useDollar, { type Dollar } from '../../composables/useDollar';

describe('useMoney', () => {
  test('掛け算が正しい', () => {
    const money: Dollar = useDollar(10);

    expect(useDollar(20).amount.value).to.equal(money.times(2).amount.value);
    expect(useDollar(30).amount.value).to.equal(money.times(3).amount.value);
  });
});
