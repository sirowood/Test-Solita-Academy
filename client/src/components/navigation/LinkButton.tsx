import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from '@material-tailwind/react';
import link from '../../styles/components/navigation/linkButton.styles';
import LinkButtonProps from '../../types/components/navigation/linkButton.type';

function LinkButton({ name, path, children }: LinkButtonProps) {
  const isActive = useLocation().pathname === path;

  return (
    <Tooltip
      content={name}
      placement="right"
    >
      <Link
        aria-label={name}
        className={link(isActive)}
        to={path}
      >
        {children}
      </Link>
    </Tooltip>
  );
}

export default LinkButton;
