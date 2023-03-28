import React from 'react';
import { SelectProps } from '../../models';

export function DropdownInput(props: SelectProps): JSX.Element {
  return (
    <div>
      <label htmlFor="dropdown">Rate this site:</label>
      <select id="dropdown" ref={props.input}>
        <option value="Choose">Choose</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      {props.errorMessage && <span className="input_error">{props.errorMessage}</span>}
    </div>
  );
}
