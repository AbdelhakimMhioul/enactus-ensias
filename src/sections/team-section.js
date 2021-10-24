/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';
import Member7 from 'assets/team/member-7.png';
import Member8 from 'assets/team/member-8.png';
import Member9 from 'assets/team/member-9.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Maryam Outaleb',
    title: 'Maryam Outaleb',
    designation: 'Club Team-Leader',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/maryout',
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/MaryamOutaleb',
        icon: <FaTwitter />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Wissal Kassaoui',
    title: 'Wissal Kassaoui',
    designation: 'Club Vice-Team-Leader',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/wissalkas',
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/wissal-kassaoui-3321161b5/',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Mhioul Abdelhakim',
    title: 'Mhioul Abdelhakim',
    designation: 'Technique Manager',
    socialProfile: [
      {
        id: 1,
        name: 'twitter',
        path: 'https://twitter.com/HkMhl',
        icon: <FaTwitter />,
      },
      {
        id: 2,
        name: 'github',
        path: 'https://github.com/AbdelhakimMhioul',
        icon: <FaGithub />,
      },
      {
        id: 3,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/abdelhakim-mhioul/',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Ikrame Nouigua',
    title: 'Ikrame Nouigua',
    designation: 'Event Co-Manager',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/IkrameNG',
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/ikrame-nouigua-b32613193/',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Ayoub Mansouri',
    title: 'Ayoub Mansouri',
    designation: 'Event Co-Manager',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/ayoub-mansouri4',
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/ayoub-mansouri-94ba891b7',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Khadija Baddouj',
    title: 'Khadija Baddouj',
    designation: 'Media Co-Manager',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/khadijabaddouj',
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/khadija-baddouj-2b26b21b4/',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 7,
    imgSrc: Member7,
    altText: 'Abdellilah Ait Ja',
    title: 'Abdellilah Ait Ja',
    designation: 'Media Co-Manager',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://web.facebook.com/aitja.222',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/abdellilah-ait-ja-5b3522159/',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 8,
    imgSrc: Member8,
    altText: 'Soufyane Djaider',
    title: 'Soufyane Djaider',
    designation: 'Sponsoring Manager',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/SoufyaneDJR',
        icon: <FaGithub />,
      }, 
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/soufyane-djaider/',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 9,
    imgSrc: Member9,
    altText: 'Mohammed Amine Alaoui Ismaili',
    title: 'Mohammed Amine Alaoui Ismaili',
    designation: 'Design Manager',
    socialProfile: [
      {
        id: 1,
        name: 'twitter',
        path: 'https://twitter.com/Amineal54197840',
        icon: <FaTwitter />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section style={{ marginTop: 70 }} id="team">
      <Container>
        <SectionHeader
          slogan="our team"
          title="The most qualified and talented individuals"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
}
