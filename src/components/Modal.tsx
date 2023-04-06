import '../styles/characterModal.scss';
import { ModalProps } from '../models';
import React from 'react';

export const Modal = ({ children, onClose }: ModalProps): JSX.Element => {
  const handleProductItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.stopPropagation();
  };

  return (
    <div className="character-modal_wrapper" onClick={onClose}>
      <div className="character-modal" onClick={handleProductItemClick}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};
