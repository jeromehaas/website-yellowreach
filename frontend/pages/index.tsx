import Head from 'next/head';
import { H1, H2, H3, H4, P } from 'components/text/Text';
import { List } from 'components/text/List';
import { Button } from 'components/links/Button';
import { Link } from 'components/links/Link';
import { PageLayout } from 'components/layout/PageLayout';
import { LimiterLayout } from 'components/layout/LimiterLayout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <LimiterLayout>
          hello
        </LimiterLayout>
      </PageLayout>

    </div>
  );
}
