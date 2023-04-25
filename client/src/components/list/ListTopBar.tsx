import React from 'react';
import { BiSearch, BiPlus } from 'react-icons/bi';
import {
  addNewButton,
  listTopBarDiv,
  searchDiv,
  searchInput,
} from '../../styles/components/list/listTopBar.styles';
import ListTopBarProps from '../../types/components/list/listTopBar.type';

function ListTopBar({
  searchText,
  setSearchText,
  changeOpen,
}: ListTopBarProps) {
  return (
    <div className={listTopBarDiv}>
      <div className={searchDiv}>
        <input
          className={searchInput}
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <BiSearch className="h-6 w-6" />
      </div>
      <button
        className={addNewButton}
        onClick={changeOpen}
      >
        <BiPlus className="h-6 w-6" />
      </button>
    </div>
  );
}

export default ListTopBar;
