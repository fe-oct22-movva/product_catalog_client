import styles from './CategoryCard.module.scss';

interface Props {
  imageUrl: string;
  imageAlt: string;
  categoryLink: string;
  categoryName: string;
  numOfModels: string;
}

export const CategoryCard: React.FC<Props> = ({
  imageUrl,
  categoryName,
  categoryLink,
  imageAlt,
  numOfModels,
}) => {
  return (
    <div className={styles.category}>
      <img src={imageUrl} alt={imageAlt} className={styles.category__photo} />

      <h4 className={styles.category__name}>
        <a href={categoryLink} className={styles.category__link}>
          {categoryName}
        </a>
      </h4>

      <p className={styles.category__description}>{numOfModels}</p>
    </div>
  );
};
