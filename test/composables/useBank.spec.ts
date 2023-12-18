import { describe, test, expect } from 'vitest';
import useBank, { type Bank } from '../../composables/useBank';

describe('useBank', () => {
  test('ratesから値が取得されること', () => {
    const bank: Bank = useBank();
    bank.addRate('CHF', 'USD', 2);

    const rate = bank.rate('CHF', 'USD');
    // expect(rate).toEqual(2);
  });
});
