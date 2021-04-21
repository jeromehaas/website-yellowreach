import React from 'react';
import NextHead from 'next/head';

interface Props {
  title?: string;
}

const Head: React.FunctionComponent<Props> = ({ title }) => (
  <NextHead>
    <title>yellowreach {title ? ` | ${title}` : null}</title>
    <meta name="description" content="Send emails with ease from your website to your email client!" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
    <meta name="author" content="Jérôme Haas" />
    <link rel="icon" href="favicon/favicon.png" />
  </NextHead>
);

export { Head };
