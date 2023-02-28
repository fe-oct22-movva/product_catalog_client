import logo from '../../../images/Logo.svg';
import '../../../styles/main.scss';

export const Header = () => {
  return (
    <header className="page__section header">
      <div className="header__content">
        <a href="/" className="logo">
          <img
            className="logo__img"
            src={logo}
            alt="Welcome to the Nice Gadgets"
          />
        </a>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link nav__link--active">
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#phones" className="nav__link">
                Phones
              </a>
            </li>

            <li className="nav__item">
              <a href="#tablets" className="nav__link">
                Tablets
              </a>
            </li>

            <li className="nav__item">
              <a href="#accessories" className="nav__link">
                Accessories
              </a>
            </li>
          </ul>
        </nav>

        <a href="#favourites" className="icon icon--favourites"></a>
        <a href="#cart" className="icon icon--cart"></a>
        <a href="#menu" className="icon icon--menu"></a>
      </div>
    </header>
  );
};
