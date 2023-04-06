import './Modal.scss';
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps): JSX.Element => {
  const handleProductItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.stopPropagation();
  };

  return (
    <div className="modal_wrapper" onClick={onClose}>
      <div className="modal" onClick={handleProductItemClick}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};
