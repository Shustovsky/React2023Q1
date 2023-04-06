import { FeedbackModalProps } from '../models';
import '../styles/feedbackModal.scss';

export function ModalConfirm({ label, onClose }: FeedbackModalProps): JSX.Element {
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
