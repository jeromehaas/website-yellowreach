import React from 'react';

interface Props {
  children: React.ReactNode;
  fontColor?: string;
  textAlign?: string;
  className?: string;
}

const H1: React.FunctionComponent<Props> = ({ children, fontColor = 'black', textAlign = 'left', className }) => (
  <h1 className={`header header-h1 text-align-${textAlign} font-color-${fontColor} ${className}`}>
    {children}
  </h1>
);
const H2: React.FunctionComponent<Props> = ({ children, fontColor = 'black', textAlign = 'left', className }) => (
  <h2 className={`title header-h2 text-align-${textAlign} font-color-${fontColor} ${className}`}>
    {children}
  </h2>
);
const H3: React.FunctionComponent<Props> = ({ children, fontColor = 'black', textAlign = 'left', className }) => (
  <h3 className={`title header-h3 text-align-${textAlign}  font-color-${fontColor} ${className}`}>
    { children}
  </h3>
);
const H4: React.FunctionComponent<Props> = ({ children, fontColor = 'black', textAlign = 'left', className }) => (
  <h4 className={`title header-h4 text-align-${textAlign} font-color-${fontColor} ${className}`}>
    {children}
  </h4>
);
const P: React.FunctionComponent<Props> = ({ children, fontColor = 'black', textAlign = 'left', className }) => (
  <p className={`paragraph text-align-${textAlign}  font-color-${fontColor} ${className}`}>
    { children}
  </p>
);

export {
  H1,
  H2,
  H3,
  H4,
  P,
};
