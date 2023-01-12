import { FC, useEffect } from "react";
import { useAppDispatch } from "../../@types/storeHoorksTypes";
import { useSearch } from "../../hooks/useSearch";

import { clearSearchValue } from "../../redux/Slices/NewsCatalogSlice";

import style from "./Search.module.scss";

export const Search: FC = () => {
  const dispatch = useAppDispatch();
  const { inputValue, onInputValueChange } = useSearch();

  useEffect(() => {
    return () => {
      dispatch(clearSearchValue());
    };
  }, []);

  return (
    <div className={style.search_container}>
      <span>Filter by keywords:</span>
      <div>
        <label htmlFor="search">
          <input
            id="search"
            type="search"
            value={inputValue}
            onChange={onInputValueChange}
            placeholder="Type to search..."
            autoComplete="off"
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z"
              fill="#575757"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};
