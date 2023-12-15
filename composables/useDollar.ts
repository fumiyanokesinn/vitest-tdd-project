import useMoney, { type Money } from './useMoney';

export const DOLLAR_CURRENCY = 'USD';
/**
 * Dollarを取得する
 * @param number
 * @returns {Dollar}
 */
const useDollar = (number: number): Money => {
  const money = useMoney(number, DOLLAR_CURRENCY);

  return { ...money };
};

export default useDollar;
