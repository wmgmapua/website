import React from 'react';
import Link from 'next/link';

const WMGHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <header className="wmg-header">
      <div className="wmg-header__wrapper">
        <div className="wmg-header__masthead">
          <Link href="/">
            <a><h2>WebMasters Guild</h2></a>
          </Link>
        </div>
        { children }
      </div>
    </header>
  );
};

export default WMGHeader;