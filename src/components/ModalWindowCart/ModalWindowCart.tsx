import React, {useEffect, useState} from 'react';
import './ModalWindowCart.scss';

interface Props {
  setIsModalWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalWindowCart: React.FC<Props> = ({setIsModalWindow}) => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="modal">
      <div className="modal-window">
        <p className="modal-window__title">Thank you for purchase!</p>
        <p className="modal-window__subtitle">Redirect in {counter}</p>
        <button
          className="modal-window__btn"
          onClick={() => {
            setIsModalWindow(false);
            localStorage.removeItem('Cart');
            window.dispatchEvent(new Event('storage'));
          }}
        />
      </div>
    </div>
  );
};
