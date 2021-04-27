import React from 'react';
import NextHead from 'next/head';

interface Props {
  title?: string;
}

const Head: React.FunctionComponent<Props> = ({ title }) => (
  <NextHead>
    <title>Yellowreach {title ? ` | ${title}` : null}</title>
    <meta name="description" content="Send emails with ease from your website to your email client!" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
    <link type="text/plain" rel="author" href="humans/humans.txt" />
    <link rel="icon" href="/favicon/favicon.png" />
    <link rel="preload" as="image" href="/cursor/arrow.svg" />
    <link rel="preload" as="image" href="/graphics/circle-grey-topleft.svg" />
    <link rel="preload" as="image" href="/graphics/circle-grey.svg" />
    <link rel="preload" as="image" href="/graphics/circle-white.svg" />
    <link rel="preload" as="image" href="/images/code.png" />
    <link rel="preload" as="image" href="/images/developer-team.jpeg" />
    <link rel="preload" as="image" href="/images/developer.jpeg" />
    <link rel="preload" as="image" href="/images/kappelbridge.png" />
    <link rel="preload" as="image" href="/images/laptop.jpeg" />
    <link rel="preload" as="image" href="/images/lucerne.jpeg" />
  </NextHead>
);

export { Head };
