import React from 'react';
import { NextPage } from 'next';

import WMGButton from '../components/primitives/WMGButton';
import BlankLayout from '../layouts/BlankLayout';
import { NextRouter, useRouter } from 'next/router';

const NotFoundPage: NextPage = () => {
  const router: NextRouter = useRouter();

  return (
    <BlankLayout title="404" description="Page not found.">
      <section className="absolute-center">
        <div className="error">
          <h1 className="error__title">404 - Not Found</h1>
          <div className="error__description">
            <p>The page you were trying to look for does not exist.</p>
            <p>Click the <code>Go back</code> button to go back to the previous page. If you think this error is a mistake, please contact one of the WMG Mapua admins.</p>
          </div>
          <div className="error__actions">
            <WMGButton type="filled inverted" onClick={() => router.back()}>Go back</WMGButton>
            <WMGButton type="outlined inverted" link="/contact">Contact</WMGButton>
          </div>
        </div>
      </section>
    </BlankLayout>
  );
};

export default NotFoundPage;