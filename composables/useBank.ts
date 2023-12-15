import useDollar from './useDollar';
import type { Expression } from './useExpression';

export interface Bank {
  reduce: (source: Expression, to: string) => any;
}

const useBank = (): Bank => {
  const reduce = (source: Expression, to: string) => {
    return useDollar(10);
  };

  return { reduce };
};

export default useBank;
