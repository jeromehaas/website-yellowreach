import React from 'react';
import { H3, P } from 'components/text/Text';
import { List } from 'components/text/List';
import { Button } from 'components/links/Button';

interface Props { }

const OpenSource: React.FunctionComponent<Props> = () => (
  <div id="opensource" className="section">
    <div className="section__wrapper opensource__wrapper">
      <div className="opensource__box opensource__box--left background-color-green">
        <H3 className="opensource__title" fontColor="white">Use cases</H3>
        <P fontColor="white" className="opensource__text">Yellowreach is self hosted on a UNIX server. The application is very dynamic and can serve almost any programming languages. Major use cases are:</P>
        <List fontColor="white" items={['Websites', 'Webapplications', 'Native Apps']} />
      </div>
      <div className="opensource__box opensource__box--right background-color-grey">
        <img className="opensource__image" src="images/code.png" alt="Code" />
      </div>

    </div>
  </div>
);

export { OpenSource };
