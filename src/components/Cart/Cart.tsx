import './Cart.scss';
import {useEffect, useState} from 'react';
import {cartItem} from '../../types/types';
import {CartItem} from '../CartItem/CartItem';
import {Breadcrumbs} from '../Breadcrumbs';
import {handleDelete} from '../../utils/localStorageRemove';

export const Cart = () => {
  const [isCartExist, setIsCartExist] = useState<string | null>(null);

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
          <title>{Cart.name}</title>
        </head>
        <Breadcrumbs />
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

                <button className="cart__total-checkout">Checkout</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>No content in cart yet</h1>
            <h3>
              On this{' '}
              <a className="cart-to" href="#/phones">
                page
              </a>{' '}
              you can find something for yourself :)
            </h3>
          </>
        )}
      </div>
    </div>
  );
};
