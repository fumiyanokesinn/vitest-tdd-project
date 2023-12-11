import useMoney, { isMoney, type Money } from './useMoney';

export const DOLLAR_CURRENCY = 'USD';
export interface Dollar extends Money {
  times: (number: number) => Dollar;
}

/**
 * Dollar型か判定する
 * @param arg
 * @returns boolean
 */
export const isDollar = (arg: any): arg is Dollar => {
  return typeof arg.times === 'function' && isMoney(arg);
};

/**
 * Dollarを取得する
 * @param number
 * @returns {Dollar}
 */
const useDollar = (number: number): Dollar => {
  const money = useMoney(number, DOLLAR_CURRENCY);

  /**
   * 金額を乗算する
   * @param number
   */
  const times = (timesNumber: number): Dollar => {
    return useDollar(money.amount.value * timesNumber);
  };
  return { ...money, times };
};

export default useDollar;
