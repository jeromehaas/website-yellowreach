import React from 'react';
import { useWindowSize } from 'functions/get-window-size';

interface Props { }

const Bubbles: React.FunctionComponent<Props> = () => {

  const { width } = useWindowSize();

  console.log(width);

  return (
    <div className="bubble-holder">
      <div className="bubble" />
    </div>
  );
};

export { Bubbles };
