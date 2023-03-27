import { FeedbackProps } from '../models';
import { useState, useEffect } from 'react';
import './feedback.scss';

export function Feedback({ feedback }: FeedbackProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (feedback.profilePicture) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImageUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(feedback.profilePicture[0]);
    }
  }, [feedback.profilePicture]);

  return (
    <div className="feedback">
      {imageUrl && <img className="feedback_img" src={imageUrl} alt="Profile" />}
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
