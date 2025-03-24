import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../store/searchSlice";
import { RootState } from "../../store/store";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
const SearchInput = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);
  const [input, setInput] = useState(query);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    dispatch(setQuery(e.target.value));
  };
  return (
    <div className="relative w-10 h-8 flex items-center justify-center flex-col">
      <input
        type="text"
        placeholder=""
        value={input}
        onChange={handleSearch}
        className="md:px-12 md:py-2.5 px-8 py-2 w-28 h-8 pl-3 pr-8 outline-none rounded-full bg-[#EDEDED] border border-black-500 absolute inset-y-0 right-2 focus:ring-blue-500"
      />
      <IoMdSearch className="w-6 h-6 top-1 absolute inset-y-0 right-4 flex items-center text-black-500" />
    </div>
  );
};

export default SearchInput;
