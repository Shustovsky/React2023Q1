import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Feedback } from '../components/Feedback';
import { Modal } from '../components/Modal';
import { IFeedback } from '../models';
import { NameInput } from '../components/inputs/NameInput';
import { DateInput } from '../components/inputs/DateInput';
import { DropdownInput } from '../components/inputs/DropdownInput';
import { SwitcherInput } from '../components/inputs/SwitcherInput';
import { RadioInput } from '../components/inputs/RadioInput';
import { PictureInput } from '../components/inputs/PictureInput';
import { Textarea } from '../components/inputs/Textarea';
import { CheckboxInput } from '../components/inputs/CheckboxInput';

export function FormPage() {
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
      name: data.name,
      birthday: data.birthday,
      rate: data.rate,
      gender: data.gender,
      text: data.text,
      profilePicture: data.profilePicture,
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
          feedbackList.map((feedback, index) => <Feedback feedback={feedback} key={index} />)}
      </section>
      {showFeedbackModal && (
        <Modal
          show={showFeedbackModal}
          onClose={() => {
            setShowFeedbackModal(false);
          }}
        />
      )}
    </>
  );
}
