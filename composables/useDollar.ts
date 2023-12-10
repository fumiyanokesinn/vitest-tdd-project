import useMoney, { type Money } from './useMoney';

export interface Dollar extends Money {
  times: (number: number) => Dollar;
}

/**
 * Dollarを取得する
 * @param number
 * @returns {Dollar}
 */
const useDollar = (number: number): Dollar => {
  const money = useMoney(number);

  /**
   * 金額を乗算する
   * @param number
   */
  const times = (timesNumber: number) => {
    return useDollar(money.amount.value * timesNumber);
  };
  return { ...money, times };
};

export default useDollar;
