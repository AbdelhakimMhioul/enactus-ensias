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
    designation: 'Présidente du Club',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/profile.php?id=100007317617840',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/maryamoutaleb15/',
        icon: <FaInstagram />,
      },
      {
        id: 3,
        name: 'github',
        path: 'https://github.com/maryout',
        icon: <FaGithub />,
      },
      {
        id: 4,
        name: 'twitter',
        path: 'https://twitter.com/MaryamOutaleb',
        icon: <FaTwitter />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Wissal Kassoui',
    title: 'Wissal Kassoui',
    designation: 'Vice-Presidente du Club',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/wiss.wissal.5477',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 3,
        name: 'github',
        path: 'https://github.com/wissalkas',
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Mhioul Abdelhakim',
    title: 'Mhioul Abdelhakim',
    designation: 'Responsable Cellule Technique',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/mhioul.abdou/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/HkMhl',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'github',
        path: 'https://github.com/AbdelhakimMhioul',
        icon: <FaGithub />,
      },
      {
        id: 4,
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
    designation: 'Co-Responsable Cellule Event',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/gaa.linaa.12',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'github',
        path: 'https://github.com/IkrameNG',
        icon: <FaGithub />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/ikramenouigua/',
        icon: <FaInstagram />,
      },
      {
        id: 3,
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
    designation: 'Co-Responsable Cellule Event',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/Mr.Ayoub.Mansouri',
        icon: <FaFacebookF />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/ayoub.m.n.s/',
        icon: <FaInstagram />,
      },
      {
        id: 4,
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
    designation: 'Co-Responsable Cellule Media',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/profile.php?id=100026895030781',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'github',
        path: 'https://github.com/khadijabaddouj',
        icon: <FaGithub />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/khadija._baddouj/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 7,
    imgSrc: Member7,
    altText: 'Abdellilah Ait Ja',
    title: 'Abdellilah Ait Ja',
    designation: 'Co-Responsable Cellule Media',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
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
    designation: 'Responsable Cellule Sponsoring',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/soufyane.djaider',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'github',
        path: 'https://github.com/SoufyaneDJR',
        icon: <FaGithub />,
      }, 
      {
        id: 3,
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
    designation: 'Responsable Cellule Design',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/alaoui.ine',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/Amineal54197840',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/Amin__alaoui/',
        icon: <FaInstagram />,
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
