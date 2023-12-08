import { describe, test, expect } from 'vitest';
import useMoney, { type Money } from '../../composables/useMoney';

describe('useMoney', () => {
  test('掛け算が正しい', () => {
    const money: Money = useMoney(10);

    const twentyMoney: Money = money.times(2);
    expect(twentyMoney.amount.value).to.equal(20);

    const thirtyMoney: Money = money.times(3);
    expect(thirtyMoney.amount.value).to.equal(30);
  });
});
