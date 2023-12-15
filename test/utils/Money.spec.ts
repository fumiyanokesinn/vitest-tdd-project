import { describe, test, expect } from 'vitest';
import { Money } from '../../utils/Money';

describe('useMoney', () => {
  test('dollarが正しいこと', () => {
    const five = new Money(5);
    five.times(2);
    expect(10).toEqual(five.amount);
  });
});
