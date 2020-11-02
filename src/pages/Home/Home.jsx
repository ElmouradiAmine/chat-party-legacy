import React from 'react';
import PropTypes from 'prop-types';

import './Home.css';
import ConnectionForm from '../../layout/ConnectionForm/ConnectionForm';

const Home = ({ className }) => (
  <div className={`home ${className}`}>
    <ConnectionForm className="home__connection-form" />
  </div>
);

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: '',
};

export default Home;
