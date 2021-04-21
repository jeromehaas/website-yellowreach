import Head from 'next/head';
import { H1, H2, H3, H4, P } from 'components/text/Text';
import { List } from 'components/text/List';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Hello World
      </main>

    </div>
  );
}
