import React from 'react';
import { H3, P } from 'components/text/Text';
import { Button } from 'components/links/Button';

interface Props { }

const OpenSource: React.FunctionComponent<Props> = () => (
  <div id="opensource" className="section">
    <div className="section__wrapper opensource__wrapper">
      <div className="opensource__box opensource__box--right">
        <img className="opensource__image rotate-backwards" src="/animations/sourcecode/sourcecode-ring-inner.png" alt="Code" />
        <img className="opensource__image rotate-forwards" src="/animations/sourcecode/sourcecode-ring-middle.png" alt="Code" />
        <img className="opensource__image rotate-backwards" src="/animations/sourcecode/sourcecode-ring-outer.png" alt="Code" />
        <img className="opensource__image" src="/animations/sourcecode/sourcecode-static.png" alt="Code" />
      </div>
      <div className="opensource__box opensource__box--left">
        <H3 className="opensource__title">Free and Opensource</H3>
        <P className="opensource__text">Yellowreach is self hosted on a UNIX server. The application is very dynamic and can serve almost any programming languages. Major use cases are:</P>
        <Button className="opensource__button" buttonText="check the repo" target="/" />
      </div>

    </div>
  </div>
);

export { OpenSource };
