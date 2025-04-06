"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../../src/store/slices/searchSlice";
import { RootState } from "../../../src/store/store";
import { IoMdSearch } from "react-icons/io";
import debounce from "lodash/debounce"; // Оптимизация ввода

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
    setInput(query); // Синхронизация локального состояния с Redux
  }, [query]);

  // Очистка debounce при размонтировании компонента
  useEffect(() => {
    return () => debouncedSetQuery.cancel();
  }, [debouncedSetQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    debouncedSetQuery(value);
  };

  return (
    <div className="relative w-36">
      <input
        type="text"
        placeholder="Поиск..."
        value={input}
        onChange={handleSearch}
        className="w-full py-2 pl-10 pr-4 rounded-full bg-[#EDEDED] border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
    </div>
  );
};

export default SearchInput;
