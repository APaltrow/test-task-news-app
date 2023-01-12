import { useEffect, useState } from "react";

interface IDebounceReturn {
  debValue: string;
}
type UseDebounceType = (value: string, delay: number) => IDebounceReturn;

export const useDebounce: UseDebounceType = (value, delay) => {
  const [debValue, setDebValue] = useState<string>("");

  useEffect(() => {
    if (value !== debValue) {
      if (!value) {
        setDebValue(value);
      } else {
        const handler = setTimeout(() => {
          setDebValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      }
    }
  }, [value]);

  return { debValue };
};
