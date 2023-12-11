import useMoney, { isMoney, type Money } from './useMoney';

export const DOLLAR_CURRENCY = 'USD';
export interface Dollar extends Money {}

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

  return { ...money };
};

export default useDollar;
