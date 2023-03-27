import React from 'react';
import { NameInputProps } from '../../models';

export const SwitcherInput: React.FC<NameInputProps> = ({ label, register }): JSX.Element => {
  return (
    <div>
      <label>
        {label}
        <input type="checkbox" id="switcher" {...register('cute')} />
        <label className="labelSwitcher" htmlFor="switcher"></label>
      </label>
    </div>
  );
};
