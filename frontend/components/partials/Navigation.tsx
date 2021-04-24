import React, { Fragment, useState, useEffect } from 'react';
import { SectionLayout } from 'components/layout/SectionLayout';
import { Link } from 'components/links/Link';

interface Props { }

const Navigation: React.FunctionComponent<Props> = () => {

  const [menuState, setMenuState] = useState('closed');

  const toggleMenu = () => {
    setMenuState(menuState === 'closed' ? 'open' : 'closed');

  };

  return (
    <Fragment>
      <nav className="desktop-navigation">
        <SectionLayout>
          <div className="desktop-navigation__wrapper">
            <Link target="/#hero" className="desktop-navigation__logo-link"><img className="desktop-navigation__logo-image" src="logos/yellowreach/yellowreach.svg" alt="yellowreach" /></Link>
            <Link fontColor="black" target="/#strenghts" className="desktop-navigation__link">Strenghts</Link>
            <Link fontColor="black" target="/#usecases" className="desktop-navigation__link">Use Cases</Link>
            <Link fontColor="black" target="/#techstack" className="desktop-navigation__link">Tech Stack</Link>
          </div>
        </SectionLayout>
      </nav>
      <nav className="mobile-navigation">
        <SectionLayout>
          <div className="mobile-navigation__wrapper">
            <img src="logos/yellowreach/yellowreach.svg" alt="" className="mobile-navigation__logo" />
            <button className={`mobile-navigation__hamburger hamburger hamburger--squeeze ${menuState === 'open' ? 'hamburger--active' : null} `} type="button" onClick={toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </SectionLayout>
      </nav>
      <div className={`mobile-navigation__backgroundlayer ${menuState === 'open' ? '--visible' : null} `} type="button" onClick={toggleMenu}>
        <Link target="/#strenghts" fontColor="black" className={`mobile-navigation__link ${menuState === 'open' ? '--visible' : null} `} type="button" onClick={toggleMenu}>Strenghts</Link>
        <Link target="/#usecases" fontColor="black" className={`mobile-navigation__link ${menuState === 'open' ? '--visible' : null} `} type="button" onClick={toggleMenu}>Use Cases</Link>
        <Link target="/#techstack" fontColor="black" className={`mobile-navigation__link ${menuState === 'open' ? '--visible' : null} `} type="button" onClick={toggleMenu}>Tech Stack</Link>
      </div>
    </Fragment>
  );
};

export { Navigation };
