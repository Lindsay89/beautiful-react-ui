import React from 'react';
import PropTypes from 'prop-types';
import SelectLabel from './SelectLabel';
import Caret from '../../Elements/_Caret';
import CloseIcon from '../../Elements/_CloseIcon';
import OptionsType from './utils/OptionsType';
import HelpText from '../_HelpText';
import ValueType from './utils/ValueType';


/**
 * Shows the select element
 */
const SelectTrigger = (props) => {
  const {
    value, options, placeholder, clearable, onClear, helpText, hasOptionGroups, multiStyle, className, ...rest
  } = props;

  const onClearHandler = (event) => {
    if (onClear) {
      event.preventDefault();
      event.stopPropagation();
      onClear();
    }
  };

  return (
    <div className={className} {...rest}>
      <div className="bi-select-element" role="button" tabIndex={0}>
        <SelectLabel
          value={value}
          options={options}
          placeholder={placeholder}
          hasOptionGroups={hasOptionGroups}
          multiStyle={multiStyle}
        />
        {clearable && (
          <span className="sel-clear-x" onClick={onClearHandler} onKeyDown={onClearHandler} role="button" tabIndex={0}>
            <CloseIcon />
          </span>
        )}
        <Caret />
      </div>
      {helpText && <HelpText text={helpText} />}
    </div>
  );
};

SelectTrigger.propTypes = {
  options: OptionsType.isRequired,
  value: ValueType,
  hasOptionGroups: PropTypes.bool,
  placeholder: PropTypes.string,
  multiStyle: PropTypes.oneOf(['strings', 'pills']),
  helpText: PropTypes.string,
  clearable: PropTypes.bool,
  onClear: PropTypes.func,
};

SelectTrigger.defaultProps = {
  value: undefined,
  placeholder: undefined,
  hasOptionGroups: false,
  helpText: undefined,
  multiStyle: 'pills',
  clearable: false,
  onClear: undefined,
};

export default React.memo(SelectTrigger);
