import React from 'react';
import { SectionLayout } from 'components/layout/SectionLayout';
import { Button } from 'components/links/Button';
import { H1, H2, P } from 'components/text/Text';

interface Props { }

const Hero: React.FunctionComponent<Props> = () => (
  <div id="hero" className="section">
    <div className="section__wrapper hero__wrapper">
      <div className="hero__card">
        <H1 className="hero__title">MailWeaver</H1>
        <H2 className="herio__subtitle">Unique in:</H2>
        <p className="hero__typewriter"><span /></p>
        <P className="hero__text">
          <span className="hero__inner-text">
            Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.
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
