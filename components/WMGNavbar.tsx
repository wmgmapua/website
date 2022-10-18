import React from 'react';
import WMGButton from './primitives/WMGButton';
import { NextRouter, useRouter } from 'next/router';

interface WMGNavItemProps {
  link: string;
  children?: React.ReactNode;
}

export const WMGNavbar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <nav className="wmg-navbar">
      <ul className="wmg-navbar__wrapper">
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