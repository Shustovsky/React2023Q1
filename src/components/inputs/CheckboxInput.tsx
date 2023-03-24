import React from 'react';
import { InputProps } from '../../models';

export function CheckboxInput(props: InputProps): JSX.Element {
  return (
    <div>
      <label htmlFor="checkbox">I have agreed to the processing of this data</label>
      <input type="checkbox" id="checkbox" ref={props.input} />
      {props.errorMessage && <span className="input_error">{props.errorMessage}</span>}
    </div>
  );
}
