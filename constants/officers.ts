export type OfficerDepartment = 'executive' | 'web' | 'papers' | 'money' | 'socmed' | 'committee' | 'ambassador';
export type OfficerPosition = string | 'ambassador';
export type Socials = 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'github' | 'website';
export type SocialObject = { platform: Socials, link: string };

export interface Officer {
  name: string;
  department: OfficerDepartment;
  position?: OfficerPosition;
  media: string;
  email?: string;
  socials?: SocialObject[];
}

export const officers: Officer[] = [
  // Executive Team
  {
    name: 'Glenn Marcus Cinco',
    department: 'executive',
    position: 'Chief Administrative Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Chris Alegre',
    department: 'executive',
    position: 'Chief Operating Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Keziah Soleño',
    department: 'executive',
    position: 'Chief Knowledge Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Rya Gumiran',
    department: 'executive',
    position: 'Chief Intelligence Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Estefanee Cacanindin',
    department: 'executive',
    position: 'COO Representative',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Erica Aquino',
    department: 'executive',
    position: 'Directing Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Kenneth Quilantang',
    department: 'executive',
    position: 'Directing Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  // Web Team
  {
    name: 'Matthew Gabriel Hernandez',
    department: 'web',
    position: 'Chief Web Design Officer',
    media: 'https://via.placeholder.com/150x300',
    socials: [
      {
        platform: 'website',
        link: 'https://www.matteusan.com'
      },
      {
        platform: 'github',
        link: 'https://www.github.com/MatteuSan'
      },
      {
        platform: 'linkedin',
        link: 'https://www.linkedin.com/in/matteusan/',
      },
    ]
  },
  {
    name: 'Cheska Gil',
    department: 'web',
    position: 'Chief Events Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Mikey Queqquegan',
    department: 'web',
    position: 'Chief Technology Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Nikki Rojas',
    department: 'web',
    position: 'Chief Compliance Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Paul Reonal',
    department: 'web',
    position: 'Chief Design Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  // Papers Team
  {
    name: 'Francoise Tuala',
    department: 'papers',
    position: 'Chief Communications Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Jan Añonuevo',
    department: 'papers',
    position: 'Chief Data Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  // Money Team
  {
    name: 'Alyssa Pepito',
    department: 'money',
    position: 'Chief Collection Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Gail Dausin',
    department: 'money',
    position: 'Chief Finance Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  // SocMed Team
  {
    name: 'Kath Dejito',
    department: 'socmed',
    position: 'Chief Publications Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Steph Zaguirre',
    department: 'socmed',
    position: 'Chief Information Officer',
    media: 'https://via.placeholder.com/150x300',
  },
  // Committee
  {
    name: 'Jeo Asajar',
    department: 'committee',
    position: 'Events Committee',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Alfred Rodriguez',
    department: 'committee',
    position: 'Logistics Committee',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Mia Miguel',
    department: 'committee',
    position: 'Documents Committee',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Aubrey Quiatchon',
    department: 'committee',
    position: 'External Affairs Committee',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Sadie Velasco',
    department: 'committee',
    position: 'Media Committee',
    media: 'https://via.placeholder.com/150x300',
  },
  {
    name: 'Zara Inocencio',
    department: 'committee',
    position: 'Media Committee',
    media: 'https://via.placeholder.com/150x300',
  },
];

export const filterOfficer = (property: keyof Officer, value: OfficerDepartment): Officer[] => {
  const _finalOfficers: Officer[] = [];
  officers.forEach(officer => officer[property] == value ? _finalOfficers.push(officer) : null);
  return _finalOfficers;
}