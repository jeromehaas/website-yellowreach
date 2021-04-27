import React from 'react';
import { H3, P } from 'components/text/Text';
import { Button } from 'components/links/Button';
import { Lottie } from '@crello/react-lottie';
import opensourceAnimation from '../../public/animations/opensource/animation-opensource.json';

interface Props { }

const OpenSource: React.FunctionComponent<Props> = () => (
  <div id="opensource" className="section">
    <div className="section__wrapper opensource__wrapper">
      <div className="opensource__box opensource__box--right">
        <Lottie
          config={{
            animationData: opensourceAnimation, autoplay: true, loop: true,
          }}
          playingState="playing"
          speed={1}
          width="100%"
          height="100%"
          style={{
            margin: 0, position: 'relative', left: '6px',
          }}
          direction={1}
        />
      </div>
      <div className="opensource__box opensource__box--left">
        <H3 className="opensource__title">Free and Opensource</H3>
        <P className="opensource__text">Yellowreach is free for everyone. Just clone the repository from GitHub and get your own mailserver up and running in a few minutes. We recommend to use a server, but any server that can run NodeJS will be fine.</P>
        <Button className="opensource__button" buttonText="check the repo" target="https://github.com/jeromehaas/yellowreach-mailserver" />
      </div>
    </div>
  </div>
);

export { OpenSource };
