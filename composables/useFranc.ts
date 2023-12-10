import useMoney, { isMoney, type Money } from './useMoney';

export const FRANC_CURRENCY = 'CHF';

export interface Franc extends Money {
  times: (number: number) => Franc;
}

/**
 * Franc型か判定する
 * @param arg
 * @returns boolean
 */
export const isFranc = (arg: any): arg is Franc => {
  return typeof arg.times === 'function' && isMoney(arg);
};

/**
 * Francを取得する
 * @param number
 * @returns {Franc}
 */
const useFranc = (number: number): Franc => {
  const money = useMoney(number);
  const currency = FRANC_CURRENCY;

  /**
   * 金額を乗算する
   * @param number
   */
  const times = (timesNumber: number) => {
    return useFranc(money.amount.value * timesNumber);
  };

  return { ...money, currency, times };
};

export default useFranc;
