import React from 'react';
import PropTypes from 'prop-types';

import '../styling/header.css';

function Header(props) {
  const { className = '', style = {}, scrollTop, children } = props;
  return (
    <div style={style} className={`standard-header ${className} ${scrollTop}`}>
      {children}
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  scrollTop: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Header;
