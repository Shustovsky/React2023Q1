import React from 'react';
import { InputProps } from '../../models';

export function DateInput(props: InputProps): JSX.Element {
  return (
    <div>
      <label htmlFor="date">Birthday:</label>
      <input type="date" id="date" ref={props.input} />
      {props.errorMessage && <span className="input_error">{props.errorMessage}</span>}
    </div>
  );
}
