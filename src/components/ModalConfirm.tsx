import './ModalConfirm.scss';

interface ModalConfirmProps {
  label: string;
  onClose: () => void;
}

export function ModalConfirm({ label, onClose }: ModalConfirmProps): JSX.Element {
  return (
    <div>
      <div className="modal-confirm">
        {label}
        <div className="modal-confirm_content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}
