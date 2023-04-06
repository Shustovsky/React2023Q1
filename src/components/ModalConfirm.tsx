import '../styles/feedbackModal.scss';

interface ModalConfirmProps {
  label: string;
  onClose: () => void;
}

export function ModalConfirm({ label, onClose }: ModalConfirmProps): JSX.Element {
  return (
    <div>
      <div className="modal">
        {label}
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}
