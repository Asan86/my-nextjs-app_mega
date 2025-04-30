"use client";
import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../../src/store/hooks";
import { setQuery } from "../../../../src/store/slices/searchSlice";
import { IoMdSearch } from "react-icons/io";
import debounce from "lodash/debounce";
import styles from "./SearchInput.module.scss";

const SearchInput = () => { 
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.search.query);

  const debouncedSetQuery = useMemo(() => {
    return debounce((value: string) => {
      dispatch(setQuery(value));
    }, 300);
  }, [dispatch]);

  useEffect(() => {
    return () => {
      debouncedSetQuery.cancel(); // Очистка при размонтировании
    };
  }, [debouncedSetQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetQuery(e.target.value);
  };

  return (
    <div className={styles.searchInputWrapper}>
      <input
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={handleSearch}
        className={styles.searchInputField}
      />
      <IoMdSearch className={styles.searchIcon} />
    </div>
  );
};

export default SearchInput;
