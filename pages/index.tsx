import React from 'react';
import { NextPage } from 'next';

import DefaultLayout from '../layouts/DefaultLayout';
import WMGButton from '../components/primitives/WMGButton';
import WMGBanner from '../components/WMGBanner';

import { site } from '../constants/site';

const HomePage: NextPage = () => {
  return (
    <DefaultLayout title="HOME">
      <WMGBanner title={site.name} subtitle="Forging bonds by building the web." media="mapua-intra-campus.webp" mediaAlt="Image of Mapua Intramuros Campus." alignment="left">
        <WMGButton type="filled inverted" link="/about">Learn more</WMGButton>
      </WMGBanner>
      <main className="content-wrap">
        <h2>Content</h2>
        <p>Sample content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eligendi perferendis? Aspernatur at aut consectetur eos illum magni officiis sint vel! Blanditiis, nobis, qui. Delectus minus odit provident quia quos!</p>
      </main>
    </DefaultLayout>
  );
};

export default HomePage;