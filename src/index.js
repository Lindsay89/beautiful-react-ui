// Elements
export { default as Button } from './components/Elements/Button';
export { default as ButtonGroup } from './components/Elements/ButtonGroup';
export { default as Icon } from './components/Elements/Icon';
export { default as Spinner } from './components/Elements/Spinner';
export { default as Breadcrumb } from './components/Elements/Breadcrumb';

// Forms
export { default as Toggle } from './components/Forms/Toggle';

/**
 * Writing an accessibility-first library of components is one of our main goals, but we need help.
 * For this reason we are using AXE (and jsx-a11y eslint plugin).
 * AXE is a testing library that highlights potential accessibility issues in console.
 * In this case is safe to disable ESLint as we will use AXE only in development mode.
 */

/* eslint-disable global-require, import/no-extraneous-dependencies */
if (process.env.NODE_ENV !== 'production') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}
/* eslint-enable global-require, import/no-extraneous-dependencies */
