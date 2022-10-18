import React from 'react';

interface WMGBannerProps {
  title: string;
  subtitle?: string;
  media: string;
  mediaAlt: string;
  alignment?: string;
  children?: React.ReactNode;
}

const WMGBanner: React.FC<WMGBannerProps> = ({ title, subtitle, alignment, media,  mediaAlt, children }) => {
  return (
    <section className="wmg-banner">
      <img src={`/img/${media}`} className="wmg-media" alt={mediaAlt} />
      <div className={`wmg-banner__wrapper${alignment ? ` is-aligned-${alignment}` : ''}`}>
        <div className="wmg-banner__title"><h1>{ title }</h1></div>
        <div className="wmg-banner__subtitle">{ subtitle }</div>
        <div className="wmg-banner__action">
          { children }
        </div>
      </div>
    </section>
  );
};

export default WMGBanner;