import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbMap2 as StationIcon } from 'react-icons/tb';
import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { GiPathDistance as JourneyIcon } from 'react-icons/gi';
import LinkButtonProps from '../types/components/navigation.type';
import {
  linkButton,
  navigation,
  link,
  tooltipArrow,
  tooltipText,
} from '../styles/components/navigation.styles';

function LinkButton({ name, path, children }: LinkButtonProps) {
  const isActive = useLocation().pathname === path;

  return (
    <div className={linkButton}>
      <Link
        className={link(isActive)}
        to={path}
      >
        {children}
      </Link>
      <div className={tooltipArrow(isActive)} />
      <div className={tooltipText(isActive)}>{name}</div>
    </div>
  );
}

function Navigation() {
  return (
    <nav className={navigation}>
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
