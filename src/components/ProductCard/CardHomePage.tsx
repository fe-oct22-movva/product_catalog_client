import {FC} from 'react';
import {Button_addToCart} from '../Button_addToCart';

interface Props {
  id: string;
  img: string;
  name: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
}

export const CardHomePage: FC<Props> = ({
  id,
  img,
  name,
  price,
  fullPrice,
  screen,
  capacity,
  ram,
}) => {
  return (
    <div className="card">
      <img className="card__icon" src={img} />

      <h3 className="card__title">{name}</h3>

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

      <Button_addToCart
        id={id}
        img={img}
        price={price}
        fullPrice={fullPrice}
        name={name}
        capacity={capacity}
        ram={ram}
        screen={screen}/>
    </div>
  );
};
