// @ts-ignore
import React from 'react';
import Link from 'next/link';

interface WMGLinkProps {
  link: string;
  children: React.ReactNode|string;
}

// @ts-ignore
const WMGLink: React.FC<WMGLinkProps> = ({link, children}) => {
  const isLinkExternal: boolean = (link.startsWith('http://') || link.startsWith('https://'));
  return (
    <Link href={link} passHref>
      <a role="link" className="wmg-link" target={isLinkExternal ? '_blank' : '_self'}>
        {children}
      </a>
    </Link>
  );
};

// @ts-ignore
export default WMGLink;