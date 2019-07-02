import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TabContent from './TabContent';
import TabButton from './TabButton';
import { BaseProps, Color } from '../../../shared';
import './tab.scss';

/**
 * The filterTabChildren function filters out all elements different from TabContent type.
 * It returns an object which contain the cloned element plus some props useful to create tab buttons.
 */
const filterTabChildren = (child, index, props) => {
  if (child.type !== TabContent) {
    /**
     * Eslint forces the developer to not have any `console` statement, in this case we want to warn the
     * user without throwing an error so it's perfectly safe to disable this rule.
     */
    /* eslint-disable-next-line no-console */
    console.warn('Tab allows only Tab.Content children, other kind of elements will be wiped out');
    return null;
  }

  const result = Object.create(null);

  result.child = React.cloneElement(child, { active: props.active === index });
  result.title = child.props.title;
  result.icon = child.props.icon;
  result.disabled = child.props.disabled;

  return result;
};


/**
 * The Tab component consists of clickable labels that shows the corresponding content.
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const Tab = React.memo((props) => {
  const { id, className, style, children, active, onChange, color, orientation } = props;
  const tabContents = Children.toArray(children).map((child, index) => filterTabChildren(child, index, props));
  const classList = classNames(`bi bi-tab tab-color-${color}`, {
    'tab-orientation': orientation === 'vertical',
  }, className);

  return (
    <div id={id} style={style} className={classList}>
      <nav className="bi-tab-nav">
        <ul>
          {tabContents.map(({ title, icon, disabled }, index) => (
            <TabButton
              key={title}
              title={title}
              icon={icon}
              active={active}
              index={index}
              onChange={onChange}
              disabled={disabled}
            />
          ))}
        </ul>
      </nav>
      <section className="bi-tab-contents">
        {tabContents.map(({ child }) => child)}
      </section>
    </div>
  );
});

Tab.propTypes = {
  ...BaseProps,
  /**
   * Defines the color of the link into the label tab, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * The callback to be performed on content change
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Defines the current active tab index
   */
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  /**
   /**
   * This props defines the orientation of the tabs.
   */
  orientation: PropTypes.string,
  /**
   * @ignore
   */
  children: PropTypes.node,
};

Tab.defaultProps = {
  color: 'default',
  orientation: 'horizontal',
  children: undefined,
};

// shorcut
Tab.Content = TabContent;

export default Tab;
