import './Cart.scss';
import {useState} from 'react';
import {cartItem} from '../../types/types';
import {CartItem} from '../CartItem/CartItem';

export const Cart = () => {
  const [isCartExist] = useState<string | null>(localStorage.getItem('Cart'));

  const cartItems = isCartExist === null ? null : JSON.parse(isCartExist);

  const handleDelete = (id: string) => {
    const cartItemToDelete = cartItems.find(
      (cartItem: cartItem) => cartItem.id === id
    );

    cartItems.splice(cartItems.indexOf(cartItemToDelete), 1);

    localStorage.setItem('Cart', JSON.stringify(cartItems));

    if (cartItems.length === 0) {
      localStorage.removeItem('Cart');
    }
  };

  return (
    <div className="cart">
      <div className="main-container">
        {isCartExist ? (
          <>
            <h1 className="cart__title">Cart</h1>

            <div className="cart-main">
              <section className="cart__items">
                {cartItems.map((cartItem: cartItem) => (
                  <CartItem
                    cartItem={cartItem}
                    handleDelete={handleDelete}
                    key={cartItem.id}
                  />
                ))}
              </section>

              <div className="cart__total">
                <h1 className="cart__total-title">
                  $2657
                </h1>

                <h1 className="cart__total-subtitle">
                  Total for 3 items
                </h1>

                <button className="cart__total-checkout">
                  Checkout
                </button>
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
