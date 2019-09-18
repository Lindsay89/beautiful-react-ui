import { warn } from '../../../shared';


// this function returns a warn massage
const checkColumnSize = (sm, md, lg, xl, offset) => {
  if ((sm > 12 || md > 12 || lg > 12 || xl > 12 || offset > 12)
    || (offset + sm) > 12 || (offset + md) > 12 || (offset + lg) > 12 || (offset + xl) > 12) {
    warn(
      'An instance of the GridColumn component received a number of column bigger than 12.'
      + '\nThis may quite possibly break your layouy. If intended, please ignore this warn',
    );
  }
};

export default checkColumnSize;
