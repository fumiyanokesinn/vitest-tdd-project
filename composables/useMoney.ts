export interface Money {
  amount: Ref<number>;
  currency: string;
  times: (number: number) => Money;
  equals: (money: Money) => boolean;
}

/**
 * Moneyを取得する
 * @param number
 * @returns {Money}
 */
const useMoney = (number: number): Money => {
  const amount = ref(number);

  /**
   * 金額を乗算する
   * @param number
   */
  const times = (timesNumber: number) => {
    return useMoney(amount.value * timesNumber);
  };

  /**
   * ２つの金額が等しいか
   * @param money
   * @return boolean
   */
  const equals = (money: Money) => amount.value === money.amount.value;
  return { amount, currency: '', times, equals };
};

export default useMoney;
