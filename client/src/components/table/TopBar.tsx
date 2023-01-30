import React from 'react';
import {
  BsSearch as SearchIcon,
  BsPlusSquare as AddIcon,
  BsFilterCircle as FilterIcon,
} from 'react-icons/bs';
import Filter from './Filter';
import TopBarProps from '../../types/components/table/topbar.type';

function TopBar({
  filters,
  pageTitle,
  searchText,
  showFilters,
  resetFilters,
  setSearchText,
  changeFilters,
  changeShowFilters,
}: TopBarProps) {
  return (
    <section className="flex flex-row items-center justify-between h-12 p-2 shadow-lg">
      <h1 className="text-2xl font-extrabold select-none">{pageTitle}</h1>
      <div className="flex flex-row items-center gap-1 px-3 py-1 rounded-3xl bg-solita-500">
        <input
          className="w-40 duration-300 outline-none bg-inherit placeholder-solita-400"
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={({ target }) => setSearchText(target.value)}
        />
        <SearchIcon />
      </div>
      <div className="relative">
        <button
          type="button"
          className="p-0 text-xl text-white/50 hover:text-white"
          onClick={changeShowFilters}
        >
          <FilterIcon />
        </button>
        <Filter
          filters={filters}
          showFilters={showFilters}
          resetFilters={resetFilters}
          changeFilters={changeFilters}
        />
      </div>
      <button
        type="button"
        className="text-xl text-white/50 hover:text-white"
      >
        <a href={`/${pageTitle.toLocaleLowerCase()}/add`}>
          <AddIcon />
        </a>
      </button>
    </section>
  );
}

export default TopBar;
