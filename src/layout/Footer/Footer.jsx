import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';
import FacebookSquaredIcon from '../../components/Icons/FacebookSquaredIcon/FacebookSquaredIcon';

const Footer = ({ className }) => (
  <footer className={`footer ${className}`}>
    <div className="footer__copyright">© 2020 Chat Party, Inc.</div>
    <a href="https://www.facebook.com/yourchatparty" target="_blank" rel="noreferrer">
      <FacebookSquaredIcon />
    </a>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
