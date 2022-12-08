import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';
import WMGTitleBar from '../components/WMGTitleBar';
import { filterOfficer, OfficerPosition, SocialObject, Socials } from '../constants/officers';
import WMGButton from '../components/primitives/WMGButton';
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';
import { MdLanguage } from 'react-icons/md';

const OfficerSection: React.FC<{ id: string, name: string, layout?: string, children: React.ReactNode }> = ({ id, name, layout = 'grid gap-md [grid-template-columns:repeat(1,1fr)] md:[grid-template-columns:repeat(2,1fr)] lg:[grid-template-columns:repeat(3,1fr)] mt-sm mb-md', children }) => {
  return (
    <section id={id}>
      <WMGTitleBar as="h2">{name}</WMGTitleBar>
      <div className={layout}>
        {children}
      </div>
    </section>
  );
}

const Officer: React.FC<{media: string, name: string, position?: OfficerPosition, socials?: SocialObject[]}> = ({ media, name, position, socials }) => {
  const socialIconMapping: Record<Socials, React.ReactNode> = {
    'facebook': <SiFacebook/>,
    'github': <SiGithub/>,
    'instagram': <SiInstagram/>,
    'linkedin': <SiLinkedin/>,
    'twitter': <SiTwitter/>,
    'website': <MdLanguage/>,
  };
  return (
    <div className="wmg-officer">
      <img src={media} alt={`${name}'s profile photo.`} className="wmg-officer__media" />
      <div>
        <div className="wmg-officer__info mb-xs">
          <h3 className="wmg-officer__name">{name}</h3>
          <p className="wmg-officer__position">{position}</p>
        </div>
        { socials ?
          <div className="wmg-officer__socials">
            {socials.map((social, key) => (
              <WMGButton key={`social-${key}`} type="icon-only" link={social.link} icon={socialIconMapping[social.platform]} />
            ))}
          </div>
          : null }
      </div>
    </div>
  )
}

const AboutPage: NextPage = () => {
  return (
    <DefaultLayout title="ABOUT">
      <main className="content-wrap">
        <section className="pb-lg">
          <WMGTitleBar>About Us</WMGTitleBar>
          <p>The WebMasters Guild is an accredited organization under the School of Information Technology of Mapúa University that specializes in web development and graphics design.</p>
        </section>
        <section className="pb-lg">
          <WMGTitleBar>Officers</WMGTitleBar>
          <OfficerSection
            id="exec-team"
            name="Executive Team"
          >
            {filterOfficer('department', 'executive').map((officer, key) => (
              <Officer key={key} media={officer.media} name={officer.name} position={officer.position} socials={officer.socials} />
            ))}
          </OfficerSection>
          <OfficerSection
            id="web-team"
            name="Web Team"
          >
            {filterOfficer('department', 'web').map((officer, key) => (
              <Officer key={key} media={officer.media} name={officer.name} position={officer.position} socials={officer.socials} />
            ))}
          </OfficerSection>
          <OfficerSection
            id="papers-team"
            name="Papers Team"
          >
            {filterOfficer('department', 'papers').map((officer, key) => (
              <Officer key={key} media={officer.media} name={officer.name} position={officer.position} socials={officer.socials} />
            ))}
          </OfficerSection>
          <OfficerSection
            id="money-team"
            name="Money Team"
          >
            {filterOfficer('department', 'money').map((officer, key) => (
              <Officer key={key} media={officer.media} name={officer.name} position={officer.position} socials={officer.socials} />
            ))}
          </OfficerSection>
          <OfficerSection
            id="web-team"
            name="Social Media Team"
          >
            {filterOfficer('department', 'socmed').map((officer, key) => (
              <Officer key={key} media={officer.media} name={officer.name} position={officer.position} socials={officer.socials} />
            ))}
          </OfficerSection>
          <OfficerSection
            id="committee"
            name="Committee"
          >
            {filterOfficer('department', 'committee').map((officer, key) => (
              <Officer key={key} media={officer.media} name={officer.name} position={officer.position} socials={officer.socials} />
            ))}
          </OfficerSection>
        </section>
        <section className="pb-lg">
          <WMGTitleBar>Members</WMGTitleBar>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default AboutPage;