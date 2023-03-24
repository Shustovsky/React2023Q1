import React from 'react';
import { InputProps } from '../../models';

export function RadioInput(props: InputProps): JSX.Element {
  return (
    <div>
      <label>
        <input type="radio" name="gender" value="Male" ref={props.input} />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="Female" ref={props.input2} />
        Female
      </label>
      {props.errorMessage && <span className="input_error">{props.errorMessage}</span>}
    </div>
  );
}
