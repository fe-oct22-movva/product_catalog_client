import styles from '../Breadcrumbs/Breadcrumbs.module.scss'
import home from '../../assets/images/Home.svg'
import arrowRight from '../../assets/images/ArrowRight.svg';

export const Breadcrumbs: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbs}>
        <img className={styles.breadcrumbs__image} src={home}/>
        <img className={styles.breadcrumbs__arrow} src={arrowRight}/>
        
        <div className={styles.breadcrumbs__text}>... Breadcrumbs</div>
      </div>
    </div>
  );
};