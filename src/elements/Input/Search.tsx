"use client";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { cn } from "@/src/lib/utils";

type SearchProps = {
  loading?: boolean;
  searchedValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleButtonClick: () => void;
};

export const Search = ({
  searchedValue,
  setSearchValue,
  loading = false,
  handleButtonClick,
}: SearchProps) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (searchedValue === "") {
      setValue("");
    }
  }, [searchedValue]);

  const toggleSearch = () => {
    if (!!searchedValue) {
      setSearchValue("");
      setValue("");
      handleButtonClick();
    } else {
      setSearchValue(value);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setSearchValue(inputValue);
  };

  return (
    <div
      className={cn("relative flex w-full items-center", {
        "pointer-events-none opacity-50": loading,
      })}
    >
      <input
        type="text"
        value={value}
        disabled={loading}
        onChange={handleChange}
        placeholder="Enter city name"
        className="text-blue h-[3.063rem] w-full rounded-[1.6rem] border border-black px-4 py-2 text-center font-normal capitalize outline-none"
      />
      <button
        onClick={toggleSearch}
        className="absolute right-0 z-30 h-[2.9rem] cursor-pointer p-2"
      >
        {!!searchedValue && (
          <IoCloseOutline className="h-full w-full" onClick={toggleSearch} />
        )}
      </button>
    </div>
  );
};
