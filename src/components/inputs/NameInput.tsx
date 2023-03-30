import React from 'react';
import { NameInputProps } from '../../models';

export const NameInput: React.FC<NameInputProps> = ({ label, register, errors }): JSX.Element => {
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
