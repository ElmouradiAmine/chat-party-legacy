import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { usersCountSelector } from './usersCountSlice';
import './UsersCount.css';

const UsersCount = ({ className }) => {
  const count = useSelector(usersCountSelector);
  return (
    <div className={`user-count ${className}`}>
      <div className="circle" />
      {count}
      {' '}
      online.
    </div>
  );
};

UsersCount.propTypes = {
  className: PropTypes.string,
};

UsersCount.defaultProps = {
  className: '',
};

export default UsersCount;
