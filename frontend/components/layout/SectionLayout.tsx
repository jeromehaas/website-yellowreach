import React from 'react';
import { LimiterLayout } from 'components/layout/LimiterLayout';

interface Props {
  children: React.ReactNode;
}

const SectionLayout: React.FunctionComponent<Props> = ({ children }) => (
  <LimiterLayout>
    <div className="section-layout">
      {children}
    </div>
  </LimiterLayout>
);

export { SectionLayout };
