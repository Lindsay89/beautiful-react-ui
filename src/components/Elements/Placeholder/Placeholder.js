import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BaseProps } from '../../../shared';

import './placeholder.scss';

/**
 * A placeholder component is used in place of a content that will soon appear within the layout.
 */
const Placeholder = ({ paragraphs, image, title, id, className, style }) => {
  const classList = classNames('bi bi-placeholder', {
    'img-placeholder': !!image,
    'img-rounded': image === 'rounded',
  }, className);

  return (
    <div className={classList} id={id} style={style}>
      {image && (<span className="bi-placeholder-img" />)}
      <div className="bi-placeholder-parag-wrapper">
        {title && <span className="bi-placeholder-title" />}
        {Array.from({ length: paragraphs }).map((und, index) => (
          // this is the only way to assign a key to the generated span component, for this reason
          // I'm are disabling the following ESLint rule.
          // eslint-disable-next-line react/no-array-index-key
          <span key={`par-${index}`} className="bi-placeholder-paragraph" />
        ))}
      </div>
    </div>
  );
};

Placeholder.propTypes = {
  ...BaseProps,
  /**
   * Defines the number of paragraphs to shown
   */
  paragraphs: PropTypes.number,
  /**
   * Defines if the component should hold place for a title
   */
  title: PropTypes.bool,
  /**
   * Defines if the component should hold place for an image
   */
  image: PropTypes.oneOf([true, false, 'rounded', 'square']),
};

Placeholder.defaultProps = {
  paragraphs: 1,
  title: false,
  image: false,
};

export default React.memo(Placeholder);
