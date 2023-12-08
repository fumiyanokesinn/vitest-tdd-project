interface Money {
  amount: Ref<number>;
  currency: string;
  times: (number: number) => void;
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
    amount.value *= timesNumber;
  };
  return { amount, currency: '', times };
};

export default useMoney;
