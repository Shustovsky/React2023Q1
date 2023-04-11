import './ModalConfirm.scss';
import { setShowFeedbackModal } from '../store/formSlice';
import { useAppDispatch } from '../hook';

interface ModalConfirmProps {
  label: string;
}

export function ModalConfirm({ label }: ModalConfirmProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="modal-confirm">
        {label}
        <div className="modal-confirm_content">
          <span
            className="close"
            onClick={() => {
              dispatch(setShowFeedbackModal(false));
            }}
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}
