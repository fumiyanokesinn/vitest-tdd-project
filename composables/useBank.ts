import type { Expression } from './useExpression';
import type { Money } from './useMoney';
import type { Pair } from './usePair';
import usePair from './usePair';

export interface Bank {
  reduce: (source: Expression, to: string) => Money;
  addRate: (from: string, to: string, rate: number) => void;
  rate: (from: string, to: string) => number;
  rates: Ref<Array<Pair>>;
}

const useBank = (): Bank => {
  const rates = ref<Array<Pair>>([]);

  // 通貨の合計を取得する
  const reduce = (source: Expression, to: string): Money => {
    return source.reduce({ reduce, addRate, rate, rates }, to);
  };

  const addRate = (from: string, to: string, rate: number): void => {
    rates.value.push(usePair(from, to, rate));
  };

  const rate = (from: string, to: string): number => {
    return (
      rates.value.find((rate) => rate.equals(usePair(from, to, 0)))?.rate ?? 1
    );
  };

  return { reduce, addRate, rate, rates };
};

export default useBank;
