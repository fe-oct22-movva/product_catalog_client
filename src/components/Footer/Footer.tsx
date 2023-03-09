import React, { memo } from 'react';
import logo from '../../assets/images/Logo.svg';
import arrowUp from '../../assets/images/DefaultUp.svg';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import {scrollTopDefault} from '../../utils/ScrollToTop';
import './footer.scss';

interface Props {
  isBurgerActivated: boolean;
}

export const Footer: React.FC<Props> = memo(
  ({isBurgerActivated}) => {
    return (
      <footer
        className={cn('page__section page__section--footer footer', {
          'footer--hidden': isBurgerActivated,
        })}>
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
                  <a
                    href="https://github.com/fe-oct22-movva/product_catalog_client"
                    className="footer-nav__link"
                    target="_blank"
                    rel="noreferrer">
                    Github
                  </a>
                </li>
  
                <li className="footer-nav__item">
                  <Link to="/contacts" className="footer-nav__link">
                    Contacts
                  </Link>
                </li>
  
                <li className="footer-nav__item">
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    className="footer-nav__link"
                    target="_blank"
                    rel="noreferrer">
                    Rights
                  </a>
                </li>
              </ul>
            </nav>
  
            <div className="scrollTop">
              <div className="scrollTop__container">
                <p className="scrollTop__title">Back to top</p>
  
                <div className="scrollTop__block" onClick={scrollTopDefault}>
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
  },
);

Footer.displayName = 'Footer';