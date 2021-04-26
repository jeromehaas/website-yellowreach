import React from 'react';
import { H3, P } from 'components/text/Text';
import { Button } from 'components/links/Button';
import { Link } from 'components/links/Link';

interface Props { }

const Footer: React.FunctionComponent<Props> = () => (
  <footer id="footer">
    <div className="section__wrapper footer__wrapper">
      <div className="footer__holder">
        <div className="footer__container">
          <ul>
            <li>Yellowreach</li>
            <li>c/o Cyberplanet</li>
            <li>Bodenmatte 16a </li>
            <li>CH-5647 Oberrüti</li>
          </ul>
        </div>
        <div className="footer__container">
          <ul>
            <li>Tel: <Link target="tel:+41795129016">+41 79 512 90 16</Link></li>
            <li>Mail: <Link href="mailto:info@yellowreach.io">info@yellowreach.io</Link></li>
            <li>Web: <Link href="https://yellowreach.io">www.yellowreach.io</Link></li>
          </ul>
        </div>
        <div className="footer__container">
          <ul>
            <li><a href="/imprint">Imprint</a></li>
            <li><a href="/privacy">Data Privacy</a></li>
          </ul>
        </div>
        <div className="footer__container">
          <Link href="https://github.com/jeromehaas/yellowreach-mailserver"><img src="/logos/social-media/github.png" alt="GitHub Repo Link" /></Link>
        </div>
      </div>
    </div>
  </footer>

);

export { Footer };
