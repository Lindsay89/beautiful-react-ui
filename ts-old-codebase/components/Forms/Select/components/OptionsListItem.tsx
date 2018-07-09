import React, { FC } from 'react';
import classNames from 'classnames';

// types
import { Callback, makeCallback } from '../../../../shared';

export type OptionListItem = {
  label: string,
  value?: string | number,
  disabled?: boolean,
  selected?: boolean,
  onSelect?: Callback<Event, { label: string, value?: string | number }>,
};

/**
 * Options List single item
 */
const OptionsListItem: FC<OptionListItem> = ({ label, selected, value, onSelect, disabled }) => {
  const classes = classNames('list-item', { disabled, selected });
  const itemProps = { role: 'button', tabIndex: 0, className: classes };

  return (
    <li {...itemProps} onClick={disabled ? undefined : makeCallback(onSelect, { label, value })}>
      {label}
    </li>
  );
};

OptionsListItem.defaultProps = {
  disabled: false,
  selected: false,
};

export default OptionsListItem;
