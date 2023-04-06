import { useState } from 'react';
import { IFeedback } from '../models';
import { SubmitHandler, useForm } from 'react-hook-form';

export const useFormPage = () => {
  const [feedbackList, setFeedbackList] = useState<IFeedback[]>([]);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFeedback>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IFeedback> = (data) => {
    const newFeedback = {
      id: feedbackList.length + 1,
      name: data.name,
      birthday: data.birthday,
      rate: data.rate,
      gender: data.gender,
      text: data.text,
      profilePicture: { ...data.profilePicture },
      cute: data.cute,
      checkbox: false,
    };
    setFeedbackList([...feedbackList, newFeedback]);

    setShowFeedbackModal(true);
    setTimeout(() => {
      setShowFeedbackModal(false);
    }, 4000);

    reset();
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    feedbackList,
    showFeedbackModal,
    setShowFeedbackModal,
  };
};
