import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'functions/get-window-size';
import parse from 'html-react-parser';

interface Props { }

const Bubbles: React.FunctionComponent<Props> = () => {

  const [bubbles, setBubbles] = useState([]);

  const getRandomColor = () => {
    const colors = ['green', 'yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomSize = () => {
    const sizes = ['big', 'medium', 'small'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const { viewPortWidth } = useWindowSize();
  const renderBubbles = (viewPortWidth) => {
    const distanceBetweenBubbles = 125;
    const numberOfBubblesToCreate = viewPortWidth / distanceBetweenBubbles;
    const bubbleArray = [];

    for (let i = 0; i < numberOfBubblesToCreate; i++) {
      const size = getRandomSize();
      const color = getRandomColor();
      bubbleArray.push(parse(`<div key=${i} class="bubble bubble-${size} background-color-${color}"></div>`));
    }

    setBubbles(bubbleArray);
  };

  useEffect(() => {
    renderBubbles(viewPortWidth);
  }, [viewPortWidth]);

  return (
    <div className="bubble-holder">
      {bubbles}
    </div>
  );
};

export { Bubbles };
