import React from 'react';

interface Props {
  children: React.ReactNode,
}

const LimiterLayout: React.FunctionComponent<Props> = ({ children }) => (
  <div className="limiter-layout">
    {children}
  </div>
);

export { LimiterLayout };
