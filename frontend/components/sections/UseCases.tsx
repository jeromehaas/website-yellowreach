import React from 'react';
import { H3, P } from 'components/text/Text';
import { List } from 'components/text/List';
import { Button } from 'components/links/Button';

interface Props { }

const UseCases: React.FunctionComponent<Props> = () => (
  <div id="opensource" className="section">
    <div className="section__wrapper usecases__wrapper">
      <div className="usecases__box usecases__box--left background-color-green">
        <H3 className="usecases__title" fontColor="white">Use cases</H3>
        <P fontColor="white" className="usecases__text">Yellowreach is self hosted on a UNIX server. The application is very dynamic and can serve almost any programming languages. Major use cases are:</P>
        <List fontColor="white" items={['Websites', 'Webapplications', 'Native Apps']} />
      </div>
      <div className="usecases__box usecases__box--right background-color-grey">
        <img className="usecases__image" src="images/code.png" alt="Code" />
      </div>

    </div>
  </div>
);

export { UseCases };
