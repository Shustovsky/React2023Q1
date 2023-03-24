import React from 'react';
import { InputProps } from '../../models';

export function PictureInput(props: InputProps): JSX.Element {
  return (
    <div>
      <label htmlFor="profilePicture">Profile picture:</label>
      <input type="file" id="profilePicture" ref={props.input} />
      {props.errorMessage && <span className="input_error">{props.errorMessage}</span>}
    </div>
  );
}
