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
            <img src="logos/yellowreach.png" alt="" className="desktop-navigation__logo" />
            <Link fontColor="black" target="/" className="desktop-navigation__link">Functions</Link>
            <Link fontColor="black" target="/" className="desktop-navigation__link">About</Link>
            <Link fontColor="black" target="/" className="desktop-navigation__link">Contact</Link>
          </div>
        </SectionLayout>
      </nav>
      <nav className="mobile-navigation">
        <SectionLayout>
          <div className="mobile-navigation__wrapper">
            <img src="logos/yellowreach.png" alt="" className="mobile-navigation__logo" />
            <button className={`mobile-navigation__hamburger hamburger hamburger--squeeze ${menuState === 'open' ? 'hamburger--active' : null} `} type="button" onClick={toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </SectionLayout>
      </nav>
      <div className={`mobile-navigation__backgroundlayer ${menuState === 'open' ? '--visible' : null} `}>
        <Link target="/" fontColor="block" className={`mobile-navigation__link ${menuState === 'open' ? '--visible' : null} `}>Funktionen</Link>
        <Link target="/" fontColor="block" className={`mobile-navigation__link ${menuState === 'open' ? '--visible' : null} `}>Funktionen</Link>
        <Link target="/" fontColor="block" className={`mobile-navigation__link ${menuState === 'open' ? '--visible' : null} `}>Funktionen</Link>
        <Link target="/" fontColor="block" className={`mobile-navigation__link ${menuState === 'open' ? '--visible' : null} `}>Funktionen</Link>

      </div>
    </Fragment>
  );
};

export { Navigation };
