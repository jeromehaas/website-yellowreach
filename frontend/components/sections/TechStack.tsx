import React from 'react';
import { H3, P } from 'components/text/Text';
import { List } from 'components/text/List';
import { Button } from 'components/links/Button';
import { Link } from 'components/links/Link';

interface Props { }

const TechStack: React.FunctionComponent<Props> = () => (
  <div id="techstack" className="section">
    <div className="section__wrapper techstack__wrapper">
      <div className="techstack__box techstack__box--right background-color-yellow">
        <img className="techstack__image coresender" src="logos/tech-stack/coresender.png" alt="Coresender" />
        <img className="techstack__image ubuntu" src="logos/tech-stack/ubuntu.png" alt="Ubuntu" />
        <img className="techstack__image zurb" src="logos/tech-stack/zurb.png" alt="Zurb" />
        <img className="techstack__image nodemailer" src="logos/tech-stack/nodemailer.png" alt="Nodemailer" />
        <img className="techstack__image express" src="logos/tech-stack/express.png" alt="Express" />
        <img className="techstack__image nodejs" src="logos/tech-stack/nodejs.png" alt="NodeJS" />
      </div>
      <div className="techstack__box techstack__box--left">
        <H3 className="techstack__title" textAlign="center">Tech Stack and Services</H3>
        <P className="techstack__text" textAlign="center">Yellowreach is largely built with NodeJS, using the Express framework, which uses the great NodeMailer package. We recommend running the server on Ubuntu and using the Zurb Email Foundation to build your HTML emails. We also suggest using Coresender - a very minimalist and bulletproof service to send the emails.</P>
        <Button className="techstack__button" buttonText="visit Coresender" target="https://coresender.com/" />
      </div>
    </div>
  </div>
);

export { TechStack };
