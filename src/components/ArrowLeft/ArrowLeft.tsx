import styles from '../ArrowLeft/ArrowLeft.module.scss';

interface Props {
  goToPreviousPage: () => void;
}

export const ArrowLeft: React.FC<Props> = ({goToPreviousPage}) => {
  return <li onClick={goToPreviousPage} className={styles.arrow}></li>;
};
