import type { Expression } from './useExpression';
import type { Money } from './useMoney';
import useMoney from './useMoney';

export interface Sum extends Expression {
  augend: Money;
  addend: Money;
  reduce: (to: string) => Money;
}

const useSum = (augend: Money, addend: Money): Sum => {
  // 通貨の合計を取得する
  const reduce = (to: string): Money => {
    const amount: number =
      augend.values.amount.value + addend.values.amount.value;
    return useMoney(amount, to);
  };
  return { augend, addend, reduce };
};

export default useSum;
