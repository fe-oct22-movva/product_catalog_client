import React, {memo, ReactNode} from 'react';
import {NavLink, To} from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: To;
  textToDisplay: string | ReactNode;
};

export const HeaderIconNavLink: React.FC<Props> = memo(
  ({to, textToDisplay}) => (
    <NavLink
      to={to}
      className={({isActive}) =>
        cn('nav__link nav__link--icon', {'nav__link--activeIcon': isActive})
      }>
      {textToDisplay}
    </NavLink>
  )
);

HeaderIconNavLink.displayName = 'HeaderIconNavLink';
