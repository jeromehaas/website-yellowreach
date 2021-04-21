import React from 'react';

interface Props {
  linkText: Text;
  fontColor?: string;
  target: string;
  textAlign?: string;
}

const Link: React.FunctionComponent<Props> = ({ linkText, fontColor = 'yellow', target = '/', textAlign = 'left' }) => (
  <a href={target} className={`link font-color-${fontColor} text-align-${textAlign}`}>
    { linkText}
  </a>
);

export { Link };
