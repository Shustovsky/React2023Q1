import React from 'react';
import { TextareaProps } from '../../models';

export function Textarea(props: TextareaProps): JSX.Element {
  return (
    <div>
      <label>
        {`Please tell me what you liked or didn't like on this site:`}
        {props.errorMessage && <span className="input_error">{props.errorMessage}</span>}
        <textarea
          name="text"
          ref={props.input}
          rows={4}
          cols={30}
          placeholder="Write here..."
        ></textarea>
      </label>
    </div>
  );
}
