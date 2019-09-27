import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Elements/Icon';
import Button from '../../Elements/Button';
import CardTitle from './CardTitle';
import CardContent from './CardContent';
import CardImage from './CardImage';
import CardFooter from './CardFooter';
import takeCardImageOutOfChildren from './takeCardImageOutOfChildren';
import getPossibleImageWrapper from './getPossibleImageWrapper';

import './card.scss';


/**
 * The Card component displays its content in a manner similar to a playing card.
 * It could possibly be composed by `Card.Title`, `Card.Content`, `Card.Image` and eventually `Card.Footer`.
 * The `Card.Image` component will be shown at the top of the card, if the card is vertically aligned.
 * Or on the left if it's horizontally aligned.
 * To change this behavior, you can possibly use `reversed` prop.
 *
 * Warning: the `Card.Image` component will never be shown in the middle of the card.
 *
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const Card = React.memo((props) => {
  const {
    children, textAlign, fluid, horizontal, actionButton, actionButtonIcon, actionButtonRender, onActionButtonClick,
    reversed, className, ...rest
  } = props;

  const [cardImage, childrenWithoutImg] = takeCardImageOutOfChildren(children);
  const [PossibleImageWrapper, possibleImageWrapperProps] = getPossibleImageWrapper(reversed, horizontal);

  const classList = classNames('bi bi-card', {
    [`text-align-${textAlign}`]: !!textAlign,
    fluid: !!fluid,
    horizontal: !!horizontal,
    reversed,
  }, className);

  return (
    <div className={classList} {...rest}>
      <PossibleImageWrapper {...possibleImageWrapperProps}>
        <div className={classNames({ 'card-action-button-icon': !!actionButton })}>
          { /* the actionButtonRender overrides the standard action button behaviour */}
          {actionButton && actionButtonRender && actionButtonRender()}
          {actionButton && !actionButtonRender && (
            <Button
              color="transparent"
              icon={<Icon name={actionButtonIcon} />}
              onClick={onActionButtonClick}
              className="btn-dots"
              rounded
            />
          )}
        </div>
        {cardImage && (cardImage)}
      </PossibleImageWrapper>
      <div className="content">{childrenWithoutImg}</div>
    </div>
  );
});

Card.propTypes = {
  /**
   * Allows to align card text content
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
  /**
   * Defines if the card should adapt its width to its container or not
   */
  fluid: PropTypes.bool,
  /**
   * Defines if the card should be horizontal or not
   */
  horizontal: PropTypes.bool,
  /**
   * If true, it shows an actionButton that will run a callback
   */
  actionButton: PropTypes.bool,
  /**
   * Allows to change actionButton's icon
   */
  actionButtonIcon: PropTypes.oneOfType([PropTypes.instanceOf(Icon), 'string']),
  /**
   * Allows to render different actionButton insted of the default one
   */
  actionButtonRender: PropTypes.func,
  /**
   * The callback to be performed on action button click
   */
  onActionButtonClick: PropTypes.func,
  /**
   * Defines weather the card should reverse its column or not
   */
  reversed: PropTypes.bool,
};

Card.defaultProps = {
  textAlign: undefined,
  fluid: false,
  horizontal: false,
  actionButton: false,
  actionButtonIcon: 'ellipsis-v',
  actionButtonRender: undefined,
  onActionButtonClick: undefined,
  reversed: false,
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Image = CardImage;
Card.Footer = CardFooter;

export default Card;
