import React from 'react';
import { InputProps } from '../../models';

export function SwitcherInput(props: InputProps): JSX.Element {
  return (
    <div>
      <label htmlFor="switcher">I agree that I&apos;m cute:</label>
      <input type="checkbox" id="switcher" ref={props.input} />
      <label className="labelSwitcher" htmlFor="switcher"></label>
    </div>
  );
}
