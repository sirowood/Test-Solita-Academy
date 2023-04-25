import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai';
import { RootState } from '../store';
import { toggleNavigationBar } from '../reducers/navigation';
import {
  topBarSection,
  toggleButton,
  topBarTitle,
} from '../styles/components/topbar.styles';
import TopBarProps from '../types/components/topbar.type';

function TopBar({ title, children }: TopBarProps) {
  const dispatch = useDispatch();
  const { showNav } = useSelector((state: RootState) => state);

  function toggleShowNav() {
    dispatch(toggleNavigationBar());
  }
  return (
    <header className={topBarSection}>
      <button
        className={toggleButton(showNav)}
        type="button"
        title="Toggle menu button"
        onClick={toggleShowNav}
      >
        <AiOutlineMenu className="h-6 w-6" />
      </button>
      <h2 className={topBarTitle}>{title}</h2>
      {children}
    </header>
  );
}

export default TopBar;
