import React, { useState } from 'react';
import Head from 'next/head';
import WMGHeader from '../components/WMGHeader';
import { WMGNavbar, WMGNavItem } from '../components/WMGNavbar';
import { site } from '../constants/site';
import WMGButton from '../components/primitives/WMGButton';
import { MdClose, MdMenu } from 'react-icons/md';

interface DefaultLayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
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
      <section style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000}}>
        <WMGHeader>
          <WMGNavbar isLarge>
            <WMGNavItem link="/">Home</WMGNavItem>
            <WMGNavItem link="/about">About</WMGNavItem>
            <WMGNavItem link="/events">Events</WMGNavItem>
            <WMGNavItem link="/contact">Contact</WMGNavItem>
            <WMGButton type="inverted filled" link="/apply">Apply now</WMGButton>
          </WMGNavbar>
          <WMGButton onClick={() => setIsNavbarOpen(!isNavbarOpen)} type="inverted js-nav-trigger"
                     icon={isNavbarOpen ? <MdClose/> : <MdMenu/>}
          />
        </WMGHeader>
        <WMGNavbar trigger={isNavbarOpen}>
          <WMGNavItem link="/">Home</WMGNavItem>
          <WMGNavItem link="/about">About</WMGNavItem>
          <WMGNavItem link="/events">Events</WMGNavItem>
          <WMGNavItem link="/contact">Contact</WMGNavItem>
          <WMGButton type="inverted filled" link="/apply">Apply now</WMGButton>
        </WMGNavbar>
      </section>
      { children }
    </>
  );
};

export default DefaultLayout;