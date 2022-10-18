import React from 'react';
import Head from 'next/head';
import WMGHeader from '../components/WMGHeader';
import { WMGNavbar, WMGNavItem } from '../components/WMGNavbar';
import { site } from '../constants/site';

interface DefaultLayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{ title } - { site.name }</title>
        <meta property="description" content={ description || site.tagline } />

        <link rel="apple-touch-icon" sizes="180x180" href={`${site.url}/img/favicon.png`} />
        <link rel="icon" type="img/png" sizes="32x32" href={`${site.url}/img/favicon.png`} />
        <link rel="icon" type="img/png" sizes="16x16" href={`${site.url}/img/favicon.png`} />

        <meta property="og:title" content={`${ title } - ${ site.name }`} />
        <meta property="og:description" content={ description || site.tagline } />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ `${site.url}/img/favicon.png` } />
        <meta property="og:url" content={ site.url } />

        <meta name="twitter:title" content={`${ title } - ${ site.name }`} />
        <meta name="twitter:description" content={ description || site.tagline } />
        <meta name="twitter:image" content={ `${site.url}/img/favicon.png` } />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={ site.twitter } />

        <meta name="theme-color" content={ site.themeColor } />
      </Head>
      <WMGHeader>
        <WMGNavbar>
          <WMGNavItem link="/">Home</WMGNavItem>
          <WMGNavItem link="/about">About</WMGNavItem>
          <WMGNavItem link="/events">Events</WMGNavItem>
          <WMGNavItem link="/contact">Contact</WMGNavItem>
        </WMGNavbar>
      </WMGHeader>
      { children }
    </>
  );
};

export default DefaultLayout;