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
    <div className="category-item">
      <img src={imageUrl} alt={imageAlt} className="category-item__photo" />

      <h4 className="category-item__name">
        <a href={categoryLink} className="category-item__link">
          {categoryName}
        </a>
      </h4>

      <p className="category-item__description">{numOfModels}</p>
    </div>
  );
};
