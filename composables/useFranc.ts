import useMoney, { isMoney, type Money } from './useMoney';

export const FRANC_CURRENCY = 'CHF';

export interface Franc extends Money {}

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
  const money = useMoney(number, FRANC_CURRENCY);

  return { ...money };
};

export default useFranc;
