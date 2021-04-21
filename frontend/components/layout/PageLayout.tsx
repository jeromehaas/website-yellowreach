import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FunctionComponent<Props> = ({ children }) => (
  <div className="page-layout">
    {children}
  </div>
);

export { PageLayout };
