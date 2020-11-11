import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const Footer = ({ className }) => (
  <footer className={`footer ${className}`}>
    <div className="footer__copyright">
      © 2020 Chat Party, Inc.
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
