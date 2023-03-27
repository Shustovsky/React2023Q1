import React from 'react';
import { NameInputProps } from '../../models';

export const CheckboxInput: React.FC<NameInputProps> = ({
  label,
  register,
  errors,
}): JSX.Element => {
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
