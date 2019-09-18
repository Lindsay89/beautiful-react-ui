import { warn } from '../../../shared';

/**
 * checks the column sizes and warns if the sum of it all is > 12
 */
const checkColumnSize = (sm, md, lg, xl, offset) => {
  if ((sm > 12 || md > 12 || lg > 12 || xl > 12 || offset > 12)
    || (offset + sm) > 12 || (offset + md) > 12 || (offset + lg) > 12 || (offset + xl) > 12) {
    warn(
      'An instance of the GridColumn component received a number of column bigger than 12.'
      + '\nThis may quite possibly break your layout. \nIf it\'s intentional, please ignore this warn.',
    );
  }
};

export default checkColumnSize;
