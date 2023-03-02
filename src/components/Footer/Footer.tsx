import React from 'react';
import logo from '../../assets/images/Logo.svg';
import arrowUp from '../../assets/images/DefaultUp.svg';

export const Footer: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="page__section page__section--footer footer">
      <div className="footer__container">
        <div className="footer__content">
          <a href="/" className="logo">
            <img
              className="logo__img logo__img--footer"
              src={logo}
              alt="Welcome to the Nice Gadgets"
            />
          </a>

          <nav className="footer-nav">
            <ul className="footer-nav__list">
              <li className="footer-nav__item">
                <a href="#github" className="footer-nav__link">
                  Github
                </a>
              </li>

              <li className="footer-nav__item">
                <a href="#contacts" className="footer-nav__link">
                  Contacts
                </a>
              </li>

              <li className="footer-nav__item">
                <a href="#rights" className="footer-nav__link">
                  Rights
                </a>
              </li>
            </ul>
          </nav>

          <div className="scrollTop">
            <div className="scrollTop__container">
              <p className="scrollTop__title">Back to top</p>

              <div className="scrollTop__block" onClick={scrollTop}>
                <a className="scrollTop__link">
                  <img
                    src={arrowUp}
                    alt="arrowUp"
                    className="scrollTop__icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
