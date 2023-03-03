import './Cart.scss';
import {useState} from 'react';
import {cartItem} from '../../types/types';
import {CartItem} from '../CartItem/CartItem';

export const Cart = () => {
  const [isCartExist] = useState<string | null>(localStorage.getItem('Cart'));
  // const [deletedItem, setDeletedItem] = useState<string>('0');

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
          <div>
            <h1 className="cart__title">Cart</h1>

            <section className="cart__items">
              {cartItems.map((cartItem: cartItem) => (
                <CartItem
                  cartItem={cartItem}
                  handleDelete={handleDelete}
                  key={cartItem.id}
                />
              ))}
            </section>
          </div>
        ) : (
          <h1>No content yet</h1>
        )}
      </div>
    </div>
  );
};
