import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbMap2 as StationIcon } from 'react-icons/tb';
import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { GiPathDistance as JourneyIcon } from 'react-icons/gi';
import LinkButtonProps from '../types/components/navigation.type';

function LinkButton({ path, children }: LinkButtonProps) {
  const { pathname } = useLocation();
  return (
    <Link
      className={`${
        pathname === path
          ? 'rounded-[28px] bg-solita-400 text-white hover:cursor-default'
          : 'rounded-md text-solita-400 hover:bg-solita-400/50 active:translate-y-0.5 active:text-gray-400'
      } mx-auto p-3 text-4xl duration-150 hover:text-white`}
      to={path}
    >
      {children}
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="flex flex-col flex-shrink-0 w-20 gap-1 pt-1 bg-solita-500">
      <LinkButton path="/">
        <HomeIcon />
      </LinkButton>
      <LinkButton path="/stations">
        <StationIcon />
      </LinkButton>
      <LinkButton path="/journeys">
        <JourneyIcon />
      </LinkButton>
    </nav>
  );
}

export default Navigation;
