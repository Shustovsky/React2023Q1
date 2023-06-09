import './Feedback.scss';
import { IFeedback } from '../../../models';

interface FeedbackProps {
  feedback: IFeedback;
}

export function Feedback({ feedback }: FeedbackProps): JSX.Element {
  return (
    <div className="feedback">
      {feedback.profilePicture[0] && (
        <img
          className="feedback_img"
          src={URL.createObjectURL(feedback.profilePicture[0])}
          alt="Profile"
        />
      )}
      <div className="feedback_name">Name: {feedback.name}</div>
      <div className="feedback_rate">
        Rate: <span className="feedback_rate_bold">{feedback.rate}</span>
      </div>
      <div className="feedback_birthday">Birthday: {feedback.birthday}</div>
      {feedback.cute && <div className="feedback_cute">You are really cute!</div>}
      <div className="feedback_gender">Gender: {feedback.gender}</div>
      <div className="feedback_text">{feedback.text}</div>
    </div>
  );
}
