import React, { useState } from 'react';
import { NextRouter, useRouter } from 'next/router';

import WMGButton from './primitives/WMGButton';
import { MdClose, MdMenu } from 'react-icons/md';

interface WMGNavItemProps {
  link: string;
  children?: React.ReactNode;
}

export const WMGNavbar: React.FC<{ isLarge?: boolean, trigger?: boolean, children?: React.ReactNode }> = ({ isLarge, trigger = true, children }) => {
  return (
    <nav className="wmg-navbar">
      <ul className={`wmg-navbar__wrapper${trigger ? ' is-visible' : ''}${isLarge ? ' is-large' : ''}`}>
        { children }
      </ul>
    </nav>
  );
};

export const WMGNavItem: React.FC<WMGNavItemProps> = ({ link, children }) => {
  const router: NextRouter = useRouter();
  const isActive: boolean = router.pathname === link;

  return (
    <WMGButton link={link} type={`inverted${ isActive ? ' active' : '' }`}>{ children }</WMGButton>
  );
}