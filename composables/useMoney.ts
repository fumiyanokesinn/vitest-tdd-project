import type { Bank } from './useBank';
import useSum, { type Sum } from './useSum';

interface Values {
  amount: Ref<number>;
  currency: string;
}

export interface Money {
  values: Values;
  equals: (money: Money) => boolean;
  times: (timesNumber: number) => Money;
  plus: (addend: Money) => Sum;
  reduce: (bank: Bank, to: string) => Money;
}

/**
 * Money型が判定する
 * @param arg
 * @returns boolean
 */
export const isMoney = (arg: any): arg is Money => {
  return (
    typeof arg.values === 'object' &&
    typeof arg.values.amount === 'object' &&
    typeof arg.values.currency === 'string' &&
    typeof arg.equals === 'function'
  );
};

/**
 * Moneyを取得する
 * @param number
 * @param currency
 * @returns {Money}
 */
const useMoney = (number: number, currency: string): Money => {
  const values: Values = { amount: ref(number), currency };

  /**
   * ２つの金額が等しいか
   * @param money
   * @return boolean
   */
  const equals = (money: Money) => {
    return (
      values.amount.value === money.values.amount.value &&
      currency === money.values.currency
    );
  };

  /**
   * 金額を乗算する
   * @param number
   */
  const times = (timesNumber: number): Money => {
    return useMoney(values.amount.value * timesNumber, currency);
  };

  const plus = (addend: Money): Sum => {
    return useSum({ values, equals, times, plus, reduce }, addend);
  };

  const reduce = (bank: Bank, to: string): Money => {
    const rate = bank.rate(values.currency, to);
    return useMoney(number * rate, to);
  };

  return { values, equals, times, plus, reduce };
};

export default useMoney;
