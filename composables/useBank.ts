import type { Expression } from './useExpression';
import type { Money } from './useMoney';

export interface Bank {
  reduce: (source: Expression, to: string) => Money;
  addRate: (from: string, to: string, rate: number) => void;
  rate: (from: string, to: string) => number;
}

const useBank = (): Bank => {
  // 通貨の合計を取得する
  const reduce = (source: Expression, to: string): Money => {
    return source.reduce(useBank(), to);
  };

  const addRate = (from: string, to: string, rate: number): void => {};

  const rate = (from: string, to: string): number => {
    return from === 'CHF' && to === 'USD' ? 2 : 1;
  };

  return { reduce, addRate, rate };
};

export default useBank;
