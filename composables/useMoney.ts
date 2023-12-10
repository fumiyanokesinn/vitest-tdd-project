export interface Money {
  amount: Ref<number>;
  currency: string;

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
   * ２つの金額が等しいか
   * @param money
   * @return boolean
   */
  const equals = (money: Money) => amount.value === money.amount.value;
  return { amount, currency: '', equals };
};

export default useMoney;
