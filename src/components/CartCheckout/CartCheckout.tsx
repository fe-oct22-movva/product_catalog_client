/* eslint-disable max-len,init-declarations */
import React, {useEffect} from 'react';

interface Props {
  setIsModalWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartCheckout: React.FC<Props> = ({setIsModalWindow}) => {
  let timerCart: NodeJS.Timer;

  const handleClick = () => {
    setIsModalWindow(true);
    timerCart = setTimeout(() => {
      localStorage.removeItem('Cart');
      window.dispatchEvent(new Event('storage'));
      setIsModalWindow(false);
    }, 4000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerCart);
    };
  }, []);

  return (
    <button className="cart__total-checkout" onClick={handleClick}>
      Checkout
    </button>
  );
};
