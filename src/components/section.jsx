import React from 'react';
import PropTypes from 'prop-types';

import '../styling/section.css';

function Section(props) {
  const { className = '', style = {}, children } = props;
  return (
    <section style={style} className={`standard-section ${className}`}>
      {children}
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
