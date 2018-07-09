import React, { FC } from 'react';
import Tag from '../../../Elements/Tag';

// types
import { Color } from '../../../../shared';
import { Option, Divider } from './Select';

type SelectLabelProps = {
  values: (string | number)[],
  options?: (Option | Divider)[],
  labelStyle?: 'list' | 'tags',
  color?: Color,
  placeholder?: string,
  labelNothingSelect?: string,
};

/**
 * Select Label
 */
const SelectLabel: FC<SelectLabelProps> = (props) => {
  const { labelStyle, color, placeholder, options, labelNothingSelect, values } = props;

  switch (values.length) {
    case 0:
    default:
      return (<span className="no-selection">{placeholder || labelNothingSelect}</span>);
    case 1:
      const value = values[0];
      const option = options ? options.filter(({ value: currentValue, disabled }: Option) => (
        !disabled && currentValue === value
      ))[0] as Option : null;

      return <span>{!!option ? option.label : labelNothingSelect}</span>;
    case 2:
      switch (labelStyle) {
        case 'list':
        default:
          const strings = values.map((value: number | string) => {
            const option = options ? options.filter((o: Option) => !o.disabled && o.value === value)[0] : undefined;

            return !!option && (option as Option).label ? (option as Option).label : undefined;
          });

          return <span>{strings.length > 0 ? strings.join(', ') : labelNothingSelect}</span>;
        case 'tags':
          return <span>{values.map(item => <Tag color={color}>{item}</Tag>)}</span>;
      }
  }
};

SelectLabel.defaultProps = {
  options: [],
  labelStyle: 'list',
  color: 'default',
};

export default SelectLabel;
