import { describe, test, expect } from 'vitest';
import useCounter from '../../composables/useCounter';

describe('useCounter', () => {
  test('カウントの初期値が正しい'),
    () => {
      const { count } = useCounter(1);
      expect(count).to.equal(1);
    };
});
