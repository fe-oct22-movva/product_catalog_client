import React from 'react';
import './ModalWindowCart.scss';

interface Props {
  setIsModalWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalWindowCart: React.FC<Props> = ({setIsModalWindow}) => (
  <div className="modal-window">
    <p className="modal-window__title">Thank you for purchase!</p>
    <button
      className="modal-window__btn"
      onClick={() => {
        setIsModalWindow(false);
      }}
    />
  </div>
);
