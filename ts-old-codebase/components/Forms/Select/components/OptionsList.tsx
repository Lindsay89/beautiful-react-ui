import React from 'react';
import classNames from 'classnames';
import { Divider, Option, SelectedOption } from './Select';
import SelectFilter from './SelectFilter';
import OptionsListItem from './OptionsListItem';
import SelectDivider from './SelectDivider';
import { Callback, Color } from '../../../../shared';

import '../styles/options-list.scss';

export type OptionsListProps = {
  onItemSelect: Callback<Event, SelectedOption>,
  options?: (Option | Divider)[],
  filtrable?: boolean,
  color?: Color,
  outline?: boolean,
  values: (string | number)[],
};

const OptionsList = ({ filtrable, color, options, onItemSelect, outline, values }: OptionsListProps) => (
  <div className={classNames('bi bi-select-options-list', `list-${color}`, { outline, 'filtrable-list': filtrable })}>
    {filtrable && <SelectFilter onChange={(event, filter) => /*this.handleFilter(filter) */ null} />}
    <div className="list-wrapper">
      {options && options.length > 0 && (
        <ul>
          {options.map((option, key) => (
            (option as Divider).divider ?
              <SelectDivider key={key} /> :
              <OptionsListItem
                key={(option as Option).value || key}
                label={(option as Option).label}
                disabled={(option as Option).disabled}
                value={(option as Option).value}
                onSelect={onItemSelect}
                selected={values && values.indexOf((option as Option).value as string) !== -1}
              />
          ))}
        </ul>
      )}
      {!options || options.length === 0 && (
        <p className="no-items">No items</p>
      )}
    </div>
  </div>
);

OptionsList.defaultProps = {
  color: 'default',
  filtrable: false,
};

export default OptionsList;
