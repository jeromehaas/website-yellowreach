import React from 'react';

interface Props {
  children: React.ReactNode;
  fontColor?: string;
  target: string;
  textAlign?: string;
  style?: any;
  className?: string;
}

const Link: React.FunctionComponent<Props> = ({ children, fontColor = 'yellow', target = '/', textAlign = 'left', className }) => (
  <a href={target} className={`link ${className} font-color-${fontColor} text-align-${textAlign}`}>
    { children}
  </a>
);

export { Link };
