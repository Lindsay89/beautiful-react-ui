import React from 'react';
import InputStateful from '../../Input/components/InputStateful';
import { Callback } from '../../../../shared';

export type SelectFilterProps = {
  onChange: Callback<Event, string>,
};

const SelectFilter = ({ onChange }: SelectFilterProps) => (
  <div className="bi bi-select-filter">
    <InputStateful icon="icon_search" iconPosition="right" onChange={onChange} />
  </div>
);

export default SelectFilter;
