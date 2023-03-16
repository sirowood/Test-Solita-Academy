import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tooltip } from '@material-tailwind/react';
import { TbMap2 as StationIcon } from 'react-icons/tb';
import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { GiPathDistance as JourneyIcon } from 'react-icons/gi';
import { RootState } from '../store';
import { navigation, link } from '../styles/components/navigation.styles';
import LinkButtonProps from '../types/components/navigation.type';

function LinkButton({ name, path, children }: LinkButtonProps) {
  const isActive = useLocation().pathname === path;

  return (
    <Tooltip
      content={name}
      placement="right"
    >
      <Link
        className={link(isActive)}
        to={path}
      >
        {children}
      </Link>
    </Tooltip>
  );
}

function Navigation() {
  const { showNav } = useSelector((state: RootState) => state);

  return (
    <nav
      className={navigation(showNav)}
      key={+showNav}
    >
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
