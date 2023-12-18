export interface Pair {
  from: string;
  to: string;
  rate: number;
  equals: (object: Pair) => boolean;
}

const usePair = (from: string, to: string, rate: number): Pair => {
  const equals = (object: Pair): boolean => {
    // パラメータ名を "other" に変更
    return from === object.from && to === object.to;
  };

  return { from, to, rate, equals };
};

export default usePair;
