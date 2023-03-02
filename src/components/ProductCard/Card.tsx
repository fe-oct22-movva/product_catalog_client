import { FC } from 'react';
import yellowLike from './images/Unionyellow.png';
import imgLike from './images/likeEmpty.png';

type Props = {
  img: string,
  name: string,
  price: number,
  screen: string,
  capacity: string,
  ram: string,
  like: boolean,
  handleLike: () => void,
};

export const Card: FC<Props> = ({
  img,
  name,
  price,
  screen,
  capacity,
  ram,
  like,
  handleLike,
}) => {
  return (
    <>
      <img className="card__icon" src={img} />

      <h3 className="card__title">
        {name}
      </h3>

      <p className="card__price">${price}</p>

      <p className="card__break-line"></p>

      <div className="card__features">
        <div className="card__names">
          <p className="card__info">Screen</p>
          <p className="card__info">Capacity</p>
          <p className="card__info">RAM</p>
        </div>

        <div className="card__chars">
          <p className="card__info">{screen}</p>
          <p className="card__info">{capacity}</p>
          <p className="card__info">{ram}</p>
        </div>
      </div>

      <div className="card__link">
        <a
          className="card__button"
          href="src/components/ProductCard#addToCart">
          Add to cart
        </a>

        <div className="button">
          <a className="button__like" onClick={handleLike}>
            {like === false ? (
              <img src={imgLike} alt="Like" />
            ) : (
              <img src={yellowLike} alt="Like" />
            )}
          </a>
        </div>
      </div>
    </>
  );
};