import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';
import WMGBanner from '../components/WMGBanner';
import WMGLink from '../components/primitives/WMGLink';

const ApplyPage: NextPage = () => {
  return (
    <DefaultLayout title="APPLY">
      <WMGBanner title="Become a WMG member!" subtitle="This is your chance to become one of us! Apply now using the form below!" media="" mediaAlt="" alignment="center" />
      <main className="content-wrap">
        Sorry! Applications are currently closed until next semester. Please check back later! Or, <WMGLink link="https://facebook.com/wmgmapua">click me</WMGLink> to check for updates.
      </main>
    </DefaultLayout>
  );
};

export default ApplyPage;