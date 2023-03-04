import './CartItem.scss';
import * as React from 'react';
import minus from '../../assets/images/Minus.svg';
import close from '../../assets/images/Close.svg';
import plus from '../../assets/images/Plus.svg';
import {cartItem, Phone} from '../../types/types';

interface Props {
  cartItem: cartItem;
  handleDelete: (id: string) => void;
}

export const CartItem: React.FC<Props> = ({
  cartItem,
  handleDelete,
}) => {
  const handlePlus = () => {
    const existingPhonesFromLocalStorage = localStorage.getItem('Cart');
    const phonesFromLocalStorageToObj
      = existingPhonesFromLocalStorage !== null
        ? JSON.parse(existingPhonesFromLocalStorage)
        : null;

    if (phonesFromLocalStorageToObj) {
      const phoneInclude = phonesFromLocalStorageToObj.find(
        (phone: Phone) => phone.id === cartItem.id
      );

      if (phoneInclude) {
        phoneInclude.amount++;

        localStorage.setItem(
          'Cart',
          JSON.stringify(phonesFromLocalStorageToObj)
        );
        window.dispatchEvent(new Event('storage'));

      }
    }
  };

  const handleMinus = () => {
    const existingPhonesFromLocalStorage = localStorage.getItem('Cart');
    const phonesFromLocalStorageToObj
      = existingPhonesFromLocalStorage !== null
        ? JSON.parse(existingPhonesFromLocalStorage)
        : null;

    if (phonesFromLocalStorageToObj) {
      const phoneInclude = phonesFromLocalStorageToObj.find(
        (phone: Phone) => phone.id === cartItem.id
      );

      if (phoneInclude.amount === 1) {
        phonesFromLocalStorageToObj.splice(phoneInclude, 1);

        localStorage.setItem(
          'Cart',
          JSON.stringify(phonesFromLocalStorageToObj)
        );
        window.dispatchEvent(new Event('storage'));
      }

      if (phoneInclude) {
        phoneInclude.amount--;

        localStorage.setItem(
          'Cart',
          JSON.stringify(phonesFromLocalStorageToObj)
        );
        window.dispatchEvent(new Event('storage'));
      }

      if (phonesFromLocalStorageToObj.length === 0) {
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

        <img
          src={cartItem.img}
          className="cart__item-phone__photo"
          alt="phone"
        />

        <p className="cart__item-phone__name">{cartItem.name}</p>
      </div>

      <div className="cart__item-price">
        <div className="cart__item-price__count">
          <button
            className="cart__item-price__count-minus"
            onClick={handleMinus}
          >
            <img src={minus} alt="minus item" />
          </button>

          <p className="cart__item-price__count-value">{cartItem.amount}</p>

          <button className="cart__item-price__count-plus" onClick={handlePlus}>
            <img src={plus} alt="plus item" />
          </button>
        </div>

        <h1 className="cart__item-price__value">${cartItem.price * cartItem.amount}</h1>
      </div>
    </div>
  );
};
