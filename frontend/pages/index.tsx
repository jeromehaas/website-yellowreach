import Head from 'next/head';
import { H1, H2, H3, H4, P } from 'components/text/Text';
import { List } from 'components/text/List';
import { Button } from 'components/links/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button target="/" color="red" buttonText="here we go" />
      </main>

    </div>
  );
}
