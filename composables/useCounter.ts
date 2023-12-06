import { ref } from 'vue';

interface Counter {
  count: Ref<number>;
  inc: () => void;
  dec: () => void;
}

const useCounter = (initialValue: number): Counter => {
  const count = ref(initialValue);
  const inc = (): void => {
    count.value = count.value + 1;
  };
  const dec = (): void => {
    count.value = count.value - 1;
  };

  return {
    count,
    inc,
    dec,
  };
};

export default useCounter;
