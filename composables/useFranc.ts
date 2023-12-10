import useMoney, { type Money } from './useMoney';

export interface Franc extends Money {
  times: (number: number) => Franc;
}

/**
 * Francを取得する
 * @param number
 * @returns {Franc}
 */
const useFranc = (number: number): Franc => {
  const money = useMoney(number);

  /**
   * 金額を乗算する
   * @param number
   */
  const times = (timesNumber: number) => {
    return useFranc(money.amount.value * timesNumber);
  };

  return { ...money, times };
};

export default useFranc;
