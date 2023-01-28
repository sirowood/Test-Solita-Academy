import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbMap2 as StationIcon } from 'react-icons/tb';
import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { GiPathDistance as JourneyIcon } from 'react-icons/gi';
import LinkButtonProps from '../types/components/navigation.type';

function LinkButton({ name, path, children }: LinkButtonProps) {
  const isActive = useLocation().pathname === path;

  return (
    <div className="relative flex flex-col items-center justify-center group">
      <Link
        className={`${
          isActive
            ? 'rounded-[28px] bg-solita-400 text-white hover:cursor-default'
            : 'rounded-md text-solita-400 hover:bg-solita-400/50 active:translate-y-0.5 active:text-gray-400'
        } mx-auto p-3 text-4xl duration-150 hover:text-white`}
        to={path}
      >
        {children}
      </Link>
      <div
        className={`${
          isActive ? '' : 'group-hover:block'
        } absolute -right-1 hidden border-4
          border-y-transparent border-r-solita-500 border-l-transparent`}
      />
      <div
        className={`${
          isActive ? '' : 'group-hover:block'
        } absolute left-[84px] hidden select-none
          rounded bg-solita-500 py-1 px-2`}
      >
        {name}
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="flex flex-col flex-shrink-0 w-20 gap-1 pt-1 bg-solita-500">
      <LinkButton
        name="Dashboard"
        path="/"
      >
        <HomeIcon />
      </LinkButton>
      <LinkButton
        name="Stations"
        path="/stations"
      >
        <StationIcon />
      </LinkButton>
      <LinkButton
        name="Journeys"
        path="/journeys"
      >
        <JourneyIcon />
      </LinkButton>
    </nav>
  );
}

export default Navigation;
