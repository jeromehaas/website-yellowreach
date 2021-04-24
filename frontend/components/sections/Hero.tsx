import React from 'react';
import { SectionLayout } from 'components/layout/SectionLayout';
import { Button } from 'components/links/Button';
import { H1, H2, P } from 'components/text/Text';
import Typewriter from 'typewriter-effect';

interface Props { }

const Hero: React.FunctionComponent<Props> = () => (
  <div id="hero" className="section">
    <div className="section__wrapper hero__wrapper">
      <div className="hero__card">
        <H1 className="hero__title">yellowreach</H1>
        <H2 className="hero__subtitle">Unique in:</H2>
        <div className="hero__typewriter__wrapper">
          <Typewriter
            options={{
              strings: ['Security', 'Simplicity', 'Deliverability', 'Setup'],
              autoStart: true,
              loop: true,
              cursorClassName: 'hero__typewriter__cursor',
              wrapperClassName: 'hero__typewriter__text',
            }}
          />
        </div>
        <P className="hero__text">
          <span className="hero__inner-text">
            yellowreach is an application to send and receive automated emails with ease - developed with passion in Lucerne.
          </span>
        </P>
        <Button className="hero__button" buttonText="view sourcecode" target="/" />
      </div>
    </div>
  </div>

);

export { Hero };

/*

*/
