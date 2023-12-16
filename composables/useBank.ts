import type { Expression } from './useExpression';
import type { Money } from './useMoney';

export interface Bank {
  reduce: (source: Expression, to: string) => Money;
}

const useBank = (): Bank => {
  // 通貨の合計を取得する
  const reduce = (source: Expression, to: string): Money => {
    return source.reduce(to);
  };

  return { reduce };
};

export default useBank;
