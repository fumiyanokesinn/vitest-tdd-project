import type { Money } from './useMoney';
import type { Sum } from './useSum';

export interface Bank {
  reduce: (source: Sum, to: string) => Money;
}

const useBank = (): Bank => {
  // 通貨の合計を取得する
  const reduce = (source: Sum, to: string): Money => {
    return source.reduce(to);
  };

  return { reduce };
};

export default useBank;
