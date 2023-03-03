import { FC } from 'react';
import { Button_addToCart } from '../Button_addToCart';

interface Props {
  img: string,
  name: string
  price: string
  screen: string
  capacity: string
  ram: string
}

export const CardHomePage: FC<Props> = ({
  img,
  name,
  price,
  screen,
  capacity,
  ram,
}) => {
  return (
    <div className="card">
      <img className="card__icon" src={img} />

      <h3 className="card__title">
        {name}
      </h3>

      <p className="card__price">{price}</p>

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

      <Button_addToCart id="3" img="bb" name="Apple" price={3000} />
      {/*fix requirments in parents block*/}
    </div>
  );
};
