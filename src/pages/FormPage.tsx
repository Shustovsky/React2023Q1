import React from 'react';
import { Feedback } from '../components/Feedback';
import { IFeedback, FormPageState } from '../models';
import { Validator } from '../components/ValidationService';
import { NameInput } from '../components/inputs/NameInput';
import { DateInput } from '../components/inputs/DateInput';
import { DropdownInput } from '../components/inputs/DropdownInput';
import { SwitcherInput } from '../components/inputs/SwitcherInput';
import { RadioInput } from '../components/inputs/RadioInput';
import { PictureInput } from '../components/inputs/PictureInput';
import { Textarea } from '../components/inputs/Textarea';
import { CheckboxInput } from '../components/inputs/CheckboxInput';
import { Modal } from '../components/Modal';

export class FormPage extends React.Component<unknown, FormPageState> {
  private validator = new Validator();
  private formRef = React.createRef<HTMLFormElement>();
  private name = React.createRef<HTMLInputElement>();
  private date = React.createRef<HTMLInputElement>();
  private dropdown = React.createRef<HTMLSelectElement>();
  private checkbox = React.createRef<HTMLInputElement>();
  private switcher = React.createRef<HTMLInputElement>();
  private radioMale = React.createRef<HTMLInputElement>();
  private radioFemale = React.createRef<HTMLInputElement>();
  private profilePicture = React.createRef<HTMLInputElement>();
  private text = React.createRef<HTMLTextAreaElement>();
  private valid = true;

  public state: FormPageState = {
    name: '',
    nameError: '',
    birthday: '',
    birthdayError: '',
    rate: '',
    rateError: '',
    checkbox: false,
    checkboxError: '',
    cute: false,
    gender: '',
    genderError: '',
    profilePicture: undefined,
    profilePictureError: '',
    text: '',
    textError: '',
    feedbackList: [],
    showFeedbackModal: false,
  };

  public handleNameChange = (): string | undefined => {
    const name = this.name.current?.value;
    if (!name) {
      this.setState({ nameError: 'This field is required' });
      this.valid = false;
    } else if (this.validator.validateText(name)) {
      this.setState({ nameError: 'Name should be at least 5 characters' });
      this.valid = false;
    } else {
      this.setState({ nameError: '' });
    }

    return name;
  };

  public handleBirthdayChange = (): string | undefined => {
    const birthday = this.date.current?.value;
    if (!birthday) {
      this.setState({ birthdayError: 'This field is required' });
      this.valid = false;
    } else if (this.validator.validateDate(birthday)) {
      this.setState({ birthdayError: 'Your date of birth should be less than today' });
      this.valid = false;
    } else {
      this.setState({ birthdayError: '' });
    }

    return birthday;
  };

  public handleRateChange = (): string | undefined => {
    const rate = this.dropdown.current?.value;
    if (rate === 'Choose') {
      this.setState({ rateError: 'This field is required' });
      this.valid = false;
    } else {
      this.setState({ rateError: '' });
    }

    return rate;
  };

  public handleCheckboxChange = (): boolean | undefined => {
    const checkbox = this.checkbox.current?.checked;
    if (!checkbox) {
      this.setState({ checkboxError: 'This field is required' });
      this.valid = false;
    } else {
      this.setState({ checkboxError: '' });
    }

    return checkbox;
  };

  public handlePictureChange = (): File | undefined => {
    const profilePicture = this.profilePicture.current?.files?.[0];
    if (!profilePicture) {
      this.setState({ profilePictureError: 'This field is required' });
      this.valid = false;
    } else if (this.validator.validatePicture(profilePicture)) {
      this.setState({ profilePictureError: 'Supported formats: png, jpg, jpeg, bmp, gif, svg' });
      this.valid = false;
    } else {
      this.setState({ profilePictureError: '' });
    }

    return profilePicture;
  };

  public handleGenderChange = (): string | undefined => {
    const genderMale = this.radioMale.current;
    const genderFemale = this.radioFemale.current;
    if (!genderMale?.checked && !genderFemale?.checked) {
      this.setState({ genderError: 'This field is required' });
      this.valid = false;
    } else {
      this.setState({ genderError: '' });
    }
    return genderMale?.checked ? genderMale?.value : genderFemale?.value;
  };

  public handleTextChange = (): string | undefined => {
    const text = this.text.current?.value;
    if (!text) {
      this.setState({ textError: 'This field is required' });
      this.valid = false;
    } else if (this.validator.validateText(text)) {
      this.setState({ textError: 'Text should be at least 5 characters' });
      this.valid = false;
    } else {
      this.setState({ textError: '' });
    }

    return text;
  };

  public handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    this.valid = true;
    const name = this.handleNameChange();
    const birthday = this.handleBirthdayChange();
    const rate = this.handleRateChange();
    const checkbox = this.handleCheckboxChange();
    const cute = this.switcher.current?.checked;
    const gender = this.handleGenderChange();
    const profilePicture = this.handlePictureChange();
    const text = this.handleTextChange();

    if (this.valid) {
      const feedback: IFeedback = {
        name,
        birthday,
        rate,
        checkbox,
        cute,
        gender,
        profilePicture,
        text,
      };

      this.setState(
        (prevState) => ({
          name: '',
          nameError: '',
          birthday: '',
          birthdayError: '',
          rate: '',
          rateError: '',
          checkbox: false,
          checkboxError: '',
          cute: false,
          gender: '',
          genderError: '',
          profilePicture: undefined,
          text: '',
          feedbackList: [...prevState.feedbackList, feedback],
          showFeedbackModal: true,
        }),
        () => {
          setTimeout(() => {
            this.setState({ showFeedbackModal: false });
          }, 4000);
        }
      );
      this.formRef.current?.reset();
    }
  };

  public render(): JSX.Element {
    return (
      <>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <h2>Please leave a rating for this site:</h2>
          <NameInput input={this.name} errorMessage={this.state.nameError} />
          <DateInput input={this.date} errorMessage={this.state.birthdayError} />
          <DropdownInput input={this.dropdown} errorMessage={this.state.rateError} />
          <SwitcherInput input={this.switcher} />
          <RadioInput
            input={this.radioMale}
            input2={this.radioFemale}
            errorMessage={this.state.genderError}
          />
          <PictureInput input={this.profilePicture} errorMessage={this.state.profilePictureError} />
          <Textarea input={this.text} errorMessage={this.state.textError} />
          <CheckboxInput input={this.checkbox} errorMessage={this.state.checkboxError} />

          <button type="submit">Submit</button>
        </form>

        <section className="feedback_container">
          {this.state.feedbackList &&
            this.state.feedbackList.map((feedback, index) => (
              <Feedback feedback={feedback} key={index} />
            ))}
        </section>
        {this.state.showFeedbackModal && (
          <Modal
            show={this.state.showFeedbackModal}
            onClose={() => {
              this.setState({ showFeedbackModal: false });
            }}
          />
        )}
      </>
    );
  }
}
