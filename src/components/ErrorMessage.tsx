import { useAppSelector } from '../hook';

export const ErrorMessage = () => {
  const error = useAppSelector((state) => state.home.error);
  return <h2 className="error-message">{error}</h2>;
};
