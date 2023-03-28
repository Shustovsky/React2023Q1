import { ModalProps } from '../models';

export function Modal(props: ModalProps): JSX.Element {
  const { show, onClose } = props;

  const handleClose = (): void => {
    onClose();
  };

  return (
    <div>
      {show && (
        <div className="modal">
          Review successfully added
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
