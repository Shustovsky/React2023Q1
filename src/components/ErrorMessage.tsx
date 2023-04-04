import { ErrorMessageProps } from '../models';

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <h2 className="error-message">{error}</h2>;
};
