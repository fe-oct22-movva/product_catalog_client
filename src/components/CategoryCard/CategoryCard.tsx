import './CategoryCard.scss';

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
    <div className="category">
      <img src={imageUrl} alt={imageAlt} className="category__photo" />

      <h4 className="category__name">
        <a href={categoryLink} className="category__link">
          {categoryName}
        </a>
      </h4>

      <p className="category__description">{numOfModels}</p>
    </div>
  );
};
