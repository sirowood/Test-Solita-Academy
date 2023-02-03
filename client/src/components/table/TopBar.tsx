import React from 'react';
import {
  BsSearch as SearchIcon,
  BsPlusSquare as AddIcon,
  BsFilterCircle as FilterIcon,
} from 'react-icons/bs';
import Filter from './Filter';
import TopBarProps from '../../types/components/table/topbar.type';
import {
  input,
  search,
  topbar,
  buttons,
  heading,
  searchIcon,
  singleButton,
} from '../../styles/components/table/topbar.styles';

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
    <section className={topbar}>
      <h1 className={heading}>{pageTitle}</h1>
      <section className={search}>
        <input
          className={input}
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={({ target }) => setSearchText(target.value)}
        />
        <SearchIcon className={searchIcon} />
      </section>

      <section className={buttons}>
        <button
          type="button"
          className={singleButton}
          onClick={changeShowFilters}
        >
          <FilterIcon />
        </button>
        <button
          type="button"
          className={singleButton}
        >
          <a href={`/${pageTitle.toLocaleLowerCase()}/add`}>
            <AddIcon />
          </a>
        </button>
      </section>

      <Filter
        filters={filters}
        showFilters={showFilters}
        resetFilters={resetFilters}
        changeFilters={changeFilters}
      />
    </section>
  );
}

export default TopBar;
