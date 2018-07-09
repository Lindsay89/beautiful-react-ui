import React, { forwardRef, FC, RefObject, ReactElement, SyntheticEvent } from 'react';
import classNames from 'classnames';
import ChevronIcon from '../../../Elements/_ChevronIcon';
import CloseIcon from '../../../Elements/_CloseIconButton';
import { SpinnerProps } from '../../../Elements/Spinner/components/Spinner';

// types
import { Callback, Color } from '../../../../shared';

type SelectElementProps = {
  renderLabel: ReactElement<any>,
  values: (string | number)[],
  onRemove: Callback<Event>,
  open?: boolean,
  color?: Color,
  spinner?: null | ReactElement<SpinnerProps>,
};

/**
 * Select Element
 */
const SelectElement: FC<SelectElementProps> = forwardRef((props, ref: RefObject<HTMLDivElement>) => {
  const { values, color, spinner, open, onRemove, renderLabel } = props;
  const nothingSelected = values && values.length === 0;

  return (
    <div className="select-element" role="button" tabIndex={0} ref={ref}>
        <span className={classNames('select-value', { opaque: nothingSelected })}>
          {renderLabel}
        </span>
      {!spinner && nothingSelected && <ChevronIcon color={color} direction={open ? 'up' : 'down'} />}
      {!spinner && !nothingSelected && <CloseIcon color={color} onClick={onRemove} />}
      {spinner ? spinner : null}
    </div>
  );
});

SelectElement.defaultProps = {
  open: false,
  color: 'default',
};

export default SelectElement;
