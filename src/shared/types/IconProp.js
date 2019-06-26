import PropTypes from 'prop-types';
import Icon from '../../components/Elements/Icon';
/**
 * define type of icon
 */
export default PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.instanceOf(Icon),
]);
