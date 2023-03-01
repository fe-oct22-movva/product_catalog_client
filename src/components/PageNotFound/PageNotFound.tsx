import './pageNotFound.scss';

export const PageNotFound = () => {
  return (
    <div className="wrapper">
      <div className="glitch__container">
        <div className="glitch__text">
          <h1 className="glitch__text__title glitch-effect">
            <strong>404</strong> <br /> PAGE NOT FOUND
            <span className="glitch-effect-text-clr1">
              <strong>404</strong>
              <br /> PAGE NOT FOUND
            </span>
            <span className="glitch-effect-text-clr2">
              <strong>404</strong>
              <br /> PAGE NOT FOUND
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
