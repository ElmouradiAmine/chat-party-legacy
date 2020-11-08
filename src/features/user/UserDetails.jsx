import React from 'react';
import PropTypes from 'prop-types';
import GenderFemaleFilledIcon from '../../components/Icons/GenderFemaleFilledIcon/GenderFemaleFilledIcon';
import GenderMaleFilledIcon from '../../components/Icons/GenderMaleFilledIcon/GenderMaleFilledIcon';

import './UserDetails.css';

function UserDetails({ className, user, disabled }) {
  return (
    <div
      className={`UserDetails ${className}`}
      style={{
        opacity: disabled ? 0.3 : 1,
      }}
    >
      {user && (
        <>
          <img
            src={`https://www.countryflags.io/${
              user.country || 'ma'
            }/flat/64.png`}
            alt="flag country "
            className="UserDetails__flag"
          />
          <p className="UserDetails__username">{user.username}</p>
          {user.gender === 'male' ? (
            <GenderMaleFilledIcon color="#2196f3" />
          ) : (
            <GenderFemaleFilledIcon color="#ec49a6" />
          )}
        </>
      )}
    </div>
  );
}
UserDetails.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string,
    gender: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
UserDetails.defaultProps = {
  className: '',
  disabled: false,
};
export default UserDetails;
