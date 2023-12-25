import type { Bank } from './useBank';
import type { Money } from './useMoney';
import useMoney from './useMoney';

export interface Sum {
  augend: Money;
  addend: Money;
  reduce: (bank: Bank, to: string) => Money;
}

const useSum = (augend: Money, addend: Money): Sum => {
  // 通貨の合計を取得する
  const reduce = (bank: Bank, to: string): Money => {
    const amount: number =
      augend.reduce(bank, to).values.amount.value +
      addend.reduce(bank, to).values.amount.value;
    return useMoney(amount, to);
  };
  return { augend, addend, reduce };
};

export default useSum;
