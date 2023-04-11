import { Feedback } from './components/Feedback';
import { ModalConfirm } from '../../components/ModalConfirm';
import {
  CheckboxInput,
  DateInput,
  DropdownInput,
  NameInput,
  PictureInput,
  RadioInput,
  SwitcherInput,
  Textarea,
} from './components/Inputs';
import { IFeedback } from '../../models';
import { SubmitHandler, useForm } from 'react-hook-form';
import './components/FormPage.scss';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setFeedbackList, setShowFeedbackModal } from '../../store/formSlice';

export function FormPage() {
  const dispatch = useAppDispatch();
  const feedbackList = useAppSelector((state) => state.feedback.feedbackList);
  const showFeedbackModal = useAppSelector((state) => state.feedback.showFeedbackModal);

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
    dispatch(setFeedbackList(newFeedback));
    dispatch(setShowFeedbackModal(true));
    setTimeout(() => {
      dispatch(setShowFeedbackModal(false));
    }, 4000);

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Please leave a rating for this site:</h2>
        <NameInput label={'Your name: '} register={register} errors={errors} />
        <DateInput label={'Birthday: '} register={register} errors={errors} />
        <DropdownInput label={'Rate this site: '} register={register} errors={errors} />
        <SwitcherInput label={`I agree that I'm cute: `} register={register} />
        <RadioInput register={register} errors={errors} />
        <PictureInput label={'Profile picture: '} register={register} errors={errors} />
        <Textarea
          label={`Please tell me what you liked or didn't like on this site: `}
          register={register}
          errors={errors}
        />
        <CheckboxInput
          label={'I have agreed to the processing of this data '}
          register={register}
          errors={errors}
        />

        <button type="submit">Submit</button>
      </form>
      <section className="feedback_container">
        {feedbackList &&
          feedbackList.map((feedback) => <Feedback feedback={feedback} key={feedback.id} />)}
      </section>
      {showFeedbackModal && <ModalConfirm label={'Review successfully added'} />}
    </>
  );
}
