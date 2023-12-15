import useMoney, { type Money } from './useMoney';

export const FRANC_CURRENCY = 'CHF';
/**
 * Francを取得する
 * @param number
 * @returns {Franc}
 */
const useFranc = (number: number): Money => {
  const money = useMoney(number, FRANC_CURRENCY);

  return { ...money };
};

export default useFranc;
