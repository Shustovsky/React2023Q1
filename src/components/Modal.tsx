import './Modal.scss';
import React from 'react';
import { setCharacter } from '../store/homeSlice';
import { useDispatch } from 'react-redux';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps): JSX.Element => {
  const handleProductItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.stopPropagation();
  };
  const dispatch = useDispatch();

  return (
    <div className="modal_wrapper" onClick={() => dispatch(setCharacter(null))}>
      <div className="modal" onClick={handleProductItemClick}>
        <span className="close" onClick={() => dispatch(setCharacter(null))}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};
