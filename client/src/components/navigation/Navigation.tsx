import React from 'react';
import { useSelector } from 'react-redux';
import { TbMap2 as StationIcon } from 'react-icons/tb';
import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { GiPathDistance as JourneyIcon } from 'react-icons/gi';
import { RootState } from '../../store';
import LinkButton from './LinkButton';
import navigation from '../../styles/components/navigation/navigation.styles';

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
