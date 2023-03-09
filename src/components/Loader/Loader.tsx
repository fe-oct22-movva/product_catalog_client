import React from 'react';
import styles from '../Loader/Loader.module.scss';
import {BouncyBallsLoader} from 'react-loaders-kit';

export const Loader: React.FC = React.memo(() => {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 0.4,
    colors: ['#4219D0', '#F4BA47', '#0F0F11'],
  };

  return (
    <div className={styles.loader}>
      <BouncyBallsLoader {...loaderProps} />
    </div>
  );
});

Loader.displayName = 'Loader';
