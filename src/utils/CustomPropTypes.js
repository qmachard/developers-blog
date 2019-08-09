import PropTypes from 'prop-types';

class CustomPropTypes {
  className = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.bool),
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.objectOf(PropTypes.bool),
      ])
    ),
  ]);
}

export default CustomPropTypes;
