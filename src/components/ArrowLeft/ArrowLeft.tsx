import styles from '../ArrowLeft/ArrowLeft.module.scss';

export const ArrowLeft: React.FC = () => {
  return (
    <div className={styles.arrow}>
      <a href="#" className={styles.arrow__link}></a>
    </div>
  );
};
