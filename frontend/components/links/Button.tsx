import React from 'react';

interface Props {
  buttonText: Text;
  backgroundColor?: string;
  target: string;
}

const Button: React.FunctionComponent<Props> = ({ buttonText, backgroundColor = 'yellow', target = '/', className }) => (
  <a href={target} className={`button background-color-${backgroundColor} ${className}`}>
    {buttonText}
  </a>
);

export { Button };
