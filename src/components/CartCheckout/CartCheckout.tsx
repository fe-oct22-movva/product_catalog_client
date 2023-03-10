/* eslint-disable max-len,init-declarations */
import React, {memo, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './CartCheckout.scss';

interface Props {
  setIsModalWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartCheckout: React.FC<Props> = memo(({setIsModalWindow}) => {
  const navigate = useNavigate();

  let timerCart: NodeJS.Timer;

  const handleClick = () => {
    setIsModalWindow(true);
    timerCart = setTimeout(() => {
      localStorage.removeItem('Cart');
      window.dispatchEvent(new Event('storage'));
      setIsModalWindow(false);
      navigate('/home');
    }, 3000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerCart);
    };
  }, []);

  return (
    <button className="cart-checkout" onClick={handleClick}>
      Checkout
    </button>
  );
});

CartCheckout.displayName = 'CartCheckout';
