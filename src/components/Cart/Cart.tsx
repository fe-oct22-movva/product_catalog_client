import './Cart.scss';
import {useCallback, useEffect, useState} from 'react';
import {cartItem} from '../../types/types';
import {CartItem} from '../CartItem/CartItem';

export const Cart = () => {
  const [isCartExist, setIsCartExist] = useState<string | null>(null);

  const cartItems = isCartExist === null ? [] : JSON.parse(isCartExist);

  useEffect(() => {
    setIsCartExist(localStorage.getItem('Cart'));
    const handleStorage = () => {
      setIsCartExist(localStorage.getItem('Cart'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [cartItems]);

  const handleDelete = useCallback(
    (id: string) => {
      const cartItemToDelete = cartItems.find(
        (cartItem: cartItem) => cartItem.id === id
      );

      if (cartItemToDelete !== undefined) {
        cartItems.splice(cartItems.indexOf(cartItemToDelete), 1);
      }

      localStorage.setItem('Cart', JSON.stringify(cartItems));
      window.dispatchEvent(new Event('storage'));

      if (cartItems.length === 0) {
        localStorage.removeItem('Cart');
      }
    },
    [cartItems]
  );

  return (
    <div className="cart">
      <div className="main-container">
        {isCartExist ? (
          <>
            <h1 className="cart__title">Cart</h1>

            <div className="cart-main">
              <section className="cart__items">
                {cartItems.map((cartItem: cartItem) => {
                  return (
                    <CartItem
                      cartItem={cartItem}
                      handleDelete={handleDelete}
                      key={cartItem.id}
                    />
                  );
                })}
              </section>

              <div className="cart__total">
                <h1 className="cart__total-title">0</h1>

                <h1 className="cart__total-subtitle">Total for 3 items</h1>

                <button className="cart__total-checkout">Checkout</button>
              </div>
            </div>
          </>
        ) : (
          <h1>No content yet</h1>
        )}
      </div>
    </div>
  );
};
