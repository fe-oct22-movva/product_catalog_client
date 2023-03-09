import './Cart.scss';
import React, {useEffect, useState} from 'react';
import {cartItem} from '../../types/types';
import {CartItem} from '../CartItem';
import {Breadcrumbs} from '../Breadcrumbs';
import {handleDelete} from '../../utils/localStorageRemove';
import {EmptyCart} from '../EmptyCart';
import {CartCheckout} from '../CartCheckout';
import {ModalWindowCart} from '../ModalWindowCart';

export const Cart = () => {
  const [isCartExist, setIsCartExist] = useState<string | null>(null);
  const [isModalWindow, setIsModalWindow] = useState(false);

  const cartItems = isCartExist === null ? [] : JSON.parse(isCartExist);
  let cartItemsCounter = 0;
  let totalPrice = 0;

  cartItems.forEach((cartItem: cartItem) => {
    cartItemsCounter += cartItem.amount;
  });

  cartItems.forEach((cartItem: cartItem) => {
    totalPrice += cartItem.price * cartItem.amount;
  });

  useEffect(() => {
    setIsCartExist(localStorage.getItem('Cart'));
    const handleStorage = () => {
      setIsCartExist(localStorage.getItem('Cart'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="main-container">
        <head>
          <title>Cart</title>
        </head>
        <Breadcrumbs />

        {isModalWindow && (
          <ModalWindowCart setIsModalWindow={setIsModalWindow} />
        )}

        {isCartExist ? (
          <>
            <h1 className="cart__title">Cart</h1>

            <div className="cart-main">
              <section className="cart__items">
                {cartItems.map((cartItem: cartItem) => {
                  return (
                    <CartItem
                      cartItem={cartItem}
                      handleDelete={() => {
                        handleDelete(cartItem.id, 'Cart');
                      }}
                      key={cartItem.id}
                    />
                  );
                })}
              </section>

              <div className="cart__total">
                <h1 className="cart__total-title">${totalPrice}</h1>

                <h1 className="cart__total-subtitle">
                  Total for {cartItemsCounter} items
                </h1>

                <CartCheckout setIsModalWindow={setIsModalWindow} />
              </div>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};
