import React from 'react';
import { InputProps } from '../../models';

export function NameInput(props: InputProps): JSX.Element {
  return (
    <div>
      <label htmlFor="name">Your name:</label>
      <input type="text" id="name" ref={props.input} />
      {props.errorMessage && <span className="input_error">{props.errorMessage}</span>}
    </div>
  );
}
