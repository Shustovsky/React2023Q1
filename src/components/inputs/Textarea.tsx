import React from 'react';
import { NameInputProps } from '../../models';

export const Textarea: React.FC<NameInputProps> = ({ label, register, errors }): JSX.Element => {
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
