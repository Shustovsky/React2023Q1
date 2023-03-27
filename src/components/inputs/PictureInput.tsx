import React from 'react';
import { NameInputProps } from '../../models';
import { Validator } from '../ValidationService';

export const PictureInput: React.FC<NameInputProps> = ({
  label,
  register,
  errors,
}): JSX.Element => {
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
