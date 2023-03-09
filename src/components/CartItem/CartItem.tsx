import './CartItem.scss';
import * as React from 'react';
import minus from '../../assets/images/Minus.svg';
import close from '../../assets/images/Close.svg';
import plus from '../../assets/images/Plus.svg';
import { cartItem } from '../../types/types';
import { setItemLocalStorage } from '../../utils/setItemLocalStorage';
import { Link } from 'react-router-dom';

interface Props {
  cartItem: cartItem;
  handleDelete: (id: string) => void;
}

export const CartItem: React.FC<Props> = ({ cartItem, handleDelete }) => {
  const handlePlus = () => {
    const cartItems = localStorage.getItem('Cart');
    const parsedItems = cartItems !== null ? JSON.parse(cartItems) : null;

    if (parsedItems) {
      const phoneInclude = parsedItems.find(
        (cart: cartItem) => cart.id === cartItem.id
      );

      if (phoneInclude) {
        phoneInclude.amount++;

        setItemLocalStorage('Cart', parsedItems);
      }
    }
  };

  const handleMinus = () => {
    const cartItems = localStorage.getItem('Cart');
    const parsedItems = cartItems !== null ? JSON.parse(cartItems) : null;

    if (parsedItems) {
      const phoneInclude = parsedItems.find(
        (cart: cartItem) => cart.id === cartItem.id
      );

      if (phoneInclude) {
        phoneInclude.amount--;

        setItemLocalStorage('Cart', parsedItems);
      }

      if (parsedItems.length === 0) {
        localStorage.removeItem('Cart');
      }
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-phone">
        <button
          className="cart__item-phone__close"
          onClick={() => {
            handleDelete(cartItem.id);
          }}>
          <img src={close} alt="delete" />
        </button>

        <Link to={cartItem.phoneId} >
          <img
            src={cartItem.img}
            className="cart__item-phone__photo"
            alt="phone"
          />
        </Link>

        <Link to={cartItem.phoneId} >
          <p className="cart__item-phone__name">{cartItem.name}</p>
        </Link>
      </div>

      <div className="cart__item-price">
        <div className="cart__item-price__count">
          <button
            className="cart__item-price__count-minus"
            onClick={handleMinus}
            disabled={cartItem.amount === 1}>
            <img src={minus} alt="minus item" />
          </button>

          <p className="cart__item-price__count-value">{cartItem.amount}</p>

          <button className="cart__item-price__count-plus" onClick={handlePlus}>
            <img src={plus} alt="plus item" />
          </button>
        </div>

        <h1 className="cart__item-price__value">
          ${cartItem.price * cartItem.amount}
        </h1>
      </div>
    </div>
  );
};
