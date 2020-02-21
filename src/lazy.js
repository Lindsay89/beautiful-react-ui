import React from 'react';

const withLazy = (path) => (props) => {
  const Component = React.lazy(() => import(path));

  return (
    <React.Suspense fallback="loading">
      <Component {...props} />
    </React.Suspense>
  );
};

// Elements
export const Alert = withLazy('./components/Elements/Alert');
export const Avatar = withLazy('./components/Elements/Avatar');
export const Breadcrumbs = withLazy('./components/Elements/Breadcrumbs');
export const Button = withLazy('./components/Elements/Button');
export const ButtonGroup = withLazy('./components/Elements/ButtonGroup');
export const DropDown = withLazy('./components/Elements/DropDown');
export const Icon = withLazy('./components/Elements/Icon');
export const Image = withLazy('./components/Elements/Image');
export const Pill = withLazy('./components/Elements/Pill');
export const Placeholder = withLazy('./components/Elements/Placeholder');
export const Spinner = withLazy('./components/Elements/Spinner');
export const Tab = withLazy('./components/Elements/Tab');
export const Popover = withLazy('./components/Elements/Popover');
export const Tooltip = withLazy('./components/Elements/Tooltip');
export const FloatingContent = withLazy('./components/Elements/FloatingContent');

// Forms
export const Label = withLazy('./components/Forms/Label');
export const Checkbox = withLazy('./components/Forms/Checkbox');
export const ToggleSwitch = withLazy('./components/Forms/ToggleSwitch');
export const Input = withLazy('./components/Forms/Input');
export const Select = withLazy('./components/Forms/Select');
export const FormGroup = withLazy('./components/Forms/FormGroup');
export const FormPanel = withLazy('./components/Forms/FormPanel');
export const DisplayField = withLazy('./components/Forms/DisplayField');
export const TextArea = withLazy('./components/Forms/TextArea');

// Layout
export const Grid = withLazy('./components/Layout/Grid');
export const Card = withLazy('./components/Layout/Card');
export const Sidebar = withLazy('./components/Layout/Sidebar');
export const Accordion = withLazy('./components/Layout/Accordion');
export const Modal = withLazy('./components/Layout/Modal');
export const List = withLazy('./components/Layout/List');

// Typography
export const Title = withLazy('./components/Typography/Title');
export const Paragraph = withLazy('./components/Typography/Paragraph');
export const Divider = withLazy('./components/Typography/Divider');
export const Link = withLazy('./components/Typography/Link');
