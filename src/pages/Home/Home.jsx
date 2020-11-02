import React from 'react';
import PropTypes from 'prop-types';

import './Home.css';

const Home = ({ className }) => <div className={`home ${className}`}>Home</div>;

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: '',
};

export default Home;
