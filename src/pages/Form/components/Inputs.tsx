import React from 'react';
import { IFeedback } from '../../../models';
import { Validator } from '../../../ValidationService';
import '../../../styles/inputs.scss';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label?: string;
  register: UseFormRegister<IFeedback>;
  errors?: FieldErrors<IFeedback>;
}

export const CheckboxInput: React.FC<InputProps> = ({ label, register, errors }): JSX.Element => {
  return (
    <div>
      <label>
        {label}
        <input
          {...register('checkbox', {
            required: 'This field is required',
          })}
          type="checkbox"
        />
      </label>
      {errors?.checkbox && (
        <span className="input_error">{`${errors?.checkbox.message || 'Error!'}`}</span>
      )}{' '}
    </div>
  );
};

export const DateInput: React.FC<InputProps> = ({ label, register, errors }): JSX.Element => {
  const validator = new Validator();
  return (
    <div>
      <label>
        {label}
        <input
          type="date"
          {...register('birthday', {
            required: 'This field is required',
            validate: validator.validateDate,
          })}
        />
      </label>
      {errors?.birthday && (
        <span className="input_error">{`${errors?.birthday.message || 'Error!'}`}</span>
      )}
    </div>
  );
};

export const DropdownInput: React.FC<InputProps> = ({ label, register, errors }): JSX.Element => {
  const validator = new Validator();
  return (
    <div>
      <label>
        {label}
        <select
          {...register('rate', {
            validate: validator.validateRate,
          })}
        >
          <option value="Choose">Choose</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </label>
      {errors?.rate && <span className="input_error">{`${errors?.rate.message || 'Error!'}`}</span>}
    </div>
  );
};

export const NameInput: React.FC<InputProps> = ({ label, register, errors }): JSX.Element => {
  return (
    <div>
      <label>
        {label}
        <input
          {...register('name', {
            required: 'This field is required',
            minLength: { value: 5, message: 'Name should be at least 5 characters' },
          })}
        />
      </label>
      {errors?.name && <span className="input_error">{`${errors?.name.message || 'Error!'}`}</span>}
    </div>
  );
};

export const PictureInput: React.FC<InputProps> = ({ label, register, errors }): JSX.Element => {
  const validator = new Validator();
  return (
    <div>
      <label>
        {label}
        <input
          {...register('profilePicture', {
            required: 'This field is required',
            validate: validator.validatePicture,
          })}
          type="file"
        />
      </label>
      {errors?.profilePicture && (
        <span className="input_error">{`${errors?.profilePicture.message || 'Error!'}`}</span>
      )}
    </div>
  );
};

export const RadioInput: React.FC<InputProps> = ({ register, errors }): JSX.Element => {
  return (
    <div>
      <label>
        <input
          {...register('gender', { required: 'This field is required' })}
          type="radio"
          name="gender"
          value="Male"
        />
        Male
      </label>
      <label>
        <input
          {...register('gender', { required: 'This field is required' })}
          type="radio"
          name="gender"
          value="Female"
        />
        Female
      </label>
      {errors?.gender && (
        <span className="input_error">{`${errors?.gender.message || 'Error!'}`}</span>
      )}
    </div>
  );
};

export const SwitcherInput: React.FC<InputProps> = ({ label, register }): JSX.Element => {
  return (
    <div>
      <label>
        {label}
        <input type="checkbox" id="switcher" {...register('cute')} />
        <label className="labelSwitcher" htmlFor="switcher"></label>
      </label>
    </div>
  );
};

export const Textarea: React.FC<InputProps> = ({ label, register, errors }): JSX.Element => {
  return (
    <div>
      <label>
        {label}
        <textarea
          {...register('text', {
            required: 'This field is required',
            minLength: { value: 10, message: 'Text should be at least 10 characters' },
          })}
          name="text"
          rows={4}
          cols={30}
          placeholder="Write here..."
        ></textarea>
      </label>
      {errors?.text && <span className="input_error">{`${errors?.text.message || 'Error!'}`}</span>}
    </div>
  );
};
