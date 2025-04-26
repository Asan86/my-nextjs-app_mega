"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../../../src/store/slices/searchSlice";
import { RootState } from "../../../../src/store/store";
import { IoMdSearch } from "react-icons/io";
import debounce from "lodash/debounce";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);
  const [input, setInput] = useState(query);

  // Дебаунс функция (мемоизируем)
  const debouncedSetQuery = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(setQuery(value));
      }, 300),
    [dispatch]
  );

  useEffect(() => {
    setInput(query);
  }, [query]);

  useEffect(() => {
    return () => debouncedSetQuery.cancel();
  }, [debouncedSetQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    debouncedSetQuery(value);
  };

  return (
    <div className={styles.searchInputWrapper}>
      <input
        type="text"
        placeholder="Поиск..."
        value={input}
        onChange={handleSearch}
        className={styles.searchInputField}
      />
      <IoMdSearch className={styles.searchIcon} />
    </div>
  );
};

export default SearchInput;
