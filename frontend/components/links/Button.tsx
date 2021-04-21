import React from 'react';

interface Props {
  buttonText: Text;
  backgroundColor?: string;
  target: string;
}

const Button: React.FunctionComponent<Props> = ({ buttonText, backgroundColor = 'yellow', target = '/' }) => (
  <a href={target} className={`button background-color-${backgroundColor}`}>
    {buttonText}
  </a>
);

export { Button };
