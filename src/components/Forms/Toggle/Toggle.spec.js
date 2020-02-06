import { cleanup } from '@testing-library/react';
import Toggle from './Toggle';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';

describe('Toggle component', () => {
  afterEach(cleanup);

  const defaultProps = { value: true };

  // performs the standard tests
  performStandardTests(Toggle, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(Toggle, defaultProps, ['bi-toggle', 'bi-toggle-success']);
});
