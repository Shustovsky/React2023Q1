import React from 'react';
import { NameInputProps } from '../../models';

export const RadioInput: React.FC<NameInputProps> = ({ register, errors }): JSX.Element => {
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
