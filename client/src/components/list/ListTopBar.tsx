import React from 'react';
import { BiSearch, BiPlus } from 'react-icons/bi';

type ListTopBarProps = {
  searchText: string;
  setSearchText: (newSearchText: string) => void;
  changeOpen: () => void;
};

function ListTopBar({
  searchText,
  setSearchText,
  changeOpen,
}: ListTopBarProps) {
  return (
    <div className="ml-auto flex flex-row items-center gap-2">
      <div className="flex flex-row items-center gap-2 rounded-2xl bg-solita-500 pr-2">
        <input
          className="h-8 w-20 appearance-none rounded-r-none rounded-l-2xl bg-solita-500 px-2 outline-none duration-150 focus:w-36"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <BiSearch className="h-6 w-6" />
      </div>
      <button
        className="rounded border-[1px] border-gray-400 text-gray-400 duration-75 hover:cursor-pointer hover:border-white hover:text-white active:scale-95"
        onClick={changeOpen}
      >
        <BiPlus className="h-6 w-6" />
      </button>
    </div>
  );
}

export default ListTopBar;
