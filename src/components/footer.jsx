import React from 'react';
import PropTypes from 'prop-types';

import '../styling/footer.css';

const Footer = React.forwardRef((props, ref) => {
  const { className = '', style = {}, children } = props;

  return (
    <div ref={ref} style={style} className={`standard-footer ${className}`}>
      {children}
    </div>
  );
});

Footer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Footer;
