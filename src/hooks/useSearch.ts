import { ChangeEvent, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../@types/storeHoorksTypes";
import { getNewsState, setSearchValue } from "../redux/Slices/NewsCatalogSlice";
import { useDebounce } from "./useDebounce";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector(getNewsState);
  const [inputValue, setInputValue] = useState<string>("");
  const { debValue } = useDebounce(inputValue, 500);

  useEffect(() => {
    if (searchValue !== inputValue) {
      dispatch(setSearchValue(debValue));
    }
  }, [debValue]);

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return {
    inputValue,
    debValue,
    onInputValueChange,
  };
};
