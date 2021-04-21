import { H1, H2, H3, H4, P } from 'components/text/Text';
import { List } from 'components/text/List';
import { Button } from 'components/links/Button';
import { Link } from 'components/links/Link';
import { PageLayout } from 'components/layout/PageLayout';
import { LimiterLayout } from 'components/layout/LimiterLayout';
import { SectionLayout } from 'components/layout/SectionLayout';
import { Head } from 'components/partials/Head';
import { Navigation } from 'components/partials/Navigation';
import { Hero } from 'components/sections/Hero';

export default function Home() {
  return (
    <div>
      <Head />
      <PageLayout>
        <Navigation />
        <Hero />
      </PageLayout>
    </div>
  );
}
