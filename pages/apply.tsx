import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';
import WMGBanner from '../components/WMGBanner';
import WMGButton from '../components/primitives/WMGButton';

const ApplyPage: NextPage = () => {
  return (
    <DefaultLayout title="APPLY">
      <WMGBanner title="SORRY... :(" subtitle="Applications are currently closed. Please check our facebook page for application openings." media="" mediaAlt="" alignment="center">
        <WMGButton type="inverted filled" link="https://facebook.com/wmgmapua">Check for updates</WMGButton>
      </WMGBanner>
      <main className="content-wrap">
        //
      </main>
    </DefaultLayout>
  );
};

export default ApplyPage;