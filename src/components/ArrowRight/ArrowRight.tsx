import styles from '../ArrowRight/ArrowRight.module.scss';

interface Props {
  goToNextPage: () => void;
}

export const ArrowRight: React.FC<Props> = ({goToNextPage}) => {
  return <li onClick={goToNextPage} className={styles.arrow}></li>;
};
