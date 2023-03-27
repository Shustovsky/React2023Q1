import React from 'react';
import { NameInputProps } from '../../models';
import { Validator } from '../ValidationService';

export const DateInput: React.FC<NameInputProps> = ({ label, register, errors }): JSX.Element => {
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
