export interface Money {
  amount: Ref<number>;
  currency: string;
  equals: (money: Money) => boolean;
}

/**
 * Money型が判定する
 * @param arg
 * @returns boolean
 */
export const isMoney = (arg: any): arg is Money => {
  return (
    typeof arg.amount === 'object' &&
    typeof arg.currency === 'string' &&
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
  const amount = ref(number);
  /**
   * ２つの金額が等しいか
   * @param money
   * @return boolean
   */
  const equals = (money: Money) => {
    return amount.value === money.amount.value && currency === money.currency;
  };

  return { amount, currency, equals };
};

export default useMoney;
