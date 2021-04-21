import Head from 'next/head';
import { H1, H2, H3, H4, P } from 'components/text/Text';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <H1>hello world</H1>
        <H2>hello world</H2>
        <H3>hello world</H3>
        <H4>hello world</H4>
        <P>hello world</P>
      </main>

    </div>
  );
}
