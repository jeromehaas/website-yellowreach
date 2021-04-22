import React from 'react';

function useWindowSize() {
  const isSSR = typeof window === 'undefined';
  const [windowSize, setWindowSize] = React.useState({
    viewPortWidth: isSSR ? 1200 : window.innerWidth,
    viewPortHeight: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({
      viewPortWidth: window.innerWidth, viewPortHeight: window.innerHeight,
    });
  }

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}

export { useWindowSize };
