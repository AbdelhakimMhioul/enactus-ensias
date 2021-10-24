/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Workshops',
    title: 'Workshops',
    text: "we try to organize several Workshops in several fields and every workshop must have a goal. Exemples: Bisness Model Canvas, Digital entrepreneurship, Strategic thinking, BMC workshop...",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'External events ',
    title: 'External events ',
    text: 'There are two important external events:  * meet of all  enactus rabat. * Participation in the national competition of enactus morocco.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Internal Events',
    title: 'Internal Events',
    text: 'We organize school field trips to study the market and find projects ideas wich will create a social impact.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Implementation',
    title: 'Implementation',
    text: 'Implement projects wich helps students develop the kind of talent and perspective that are essential to leadership in an challenging world',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Activities & Events"
          title="Creativity & Bloody Passion"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
