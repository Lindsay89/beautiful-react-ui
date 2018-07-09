import React from 'react';
import '../styles/tab-content.scss';
import classNames from 'classnames';

type Props = {
  id?: string,
  isActive?: boolean,
  title?: string,
  icon?: string,
  color?: string,
  children?: any,
};

const defaultProps: Partial<Props> = {
  isActive: false,
  title: '',
  color: 'default',
};

const TabContent: React.SFC<Props> = (props: Props) => {
  const { id, isActive, children } = props;

  const classesContent = ['tab-content'];

  if (isActive) {
    classesContent.push('active');
  }

  return (
    <div id={id} className={classNames(classesContent)}>
      {children}
    </div>
  );
};

TabContent.defaultProps = defaultProps;

export default TabContent;
