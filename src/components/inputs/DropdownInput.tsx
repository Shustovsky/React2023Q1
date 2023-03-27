import React from 'react';
import { NameInputProps } from '../../models';
import { Validator } from '../ValidationService';

export const DropdownInput: React.FC<NameInputProps> = ({
  label,
  register,
  errors,
}): JSX.Element => {
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
