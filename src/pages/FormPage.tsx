import { Feedback } from '../components/Feedback';
import { ModalConfirm } from '../components/ModalConfirm';
import { useFormPage } from '../hooks/formPageHook';
import {
  CheckboxInput,
  DateInput,
  DropdownInput,
  NameInput,
  PictureInput,
  RadioInput,
  SwitcherInput,
  Textarea,
} from '../components/Inputs';
import '../styles/formPage.scss';

export function FormPage() {
  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    feedbackList,
    showFeedbackModal,
    setShowFeedbackModal,
  } = useFormPage();

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
      {showFeedbackModal && (
        <ModalConfirm
          label={'Review successfully added'}
          onClose={() => {
            setShowFeedbackModal(false);
          }}
        />
      )}
    </>
  );
}
