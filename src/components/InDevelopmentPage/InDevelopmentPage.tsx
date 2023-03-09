import { memo } from 'react';
import './InDevelopmentPage.scss';

export const InDevelopmentPage = memo(
  () => {
    return (
      <div className="container">
        <div className="gearbox">
          <div className="overlay"></div>
          <div className="gear one">
            <div className="gear-inner">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="gear two">
            <div className="gear-inner">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="gear three">
            <div className="gear-inner">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="gear four large">
            <div className="gear-inner">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <h1 className="gear-text">In development</h1>
      </div>
    );
  },
);

InDevelopmentPage.displayName = 'InDevelopmentPage';