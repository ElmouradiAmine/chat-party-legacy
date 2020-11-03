import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ConnectionForm.css';
import Input from '../../components/Input/Input';

const ConnectionForm = ({ className }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form className={`connection-form ${className}`}>
      <Input
        type="text"
        className="connection-form__username"
        onChange={handleUsernameChange}
        value={username}
        placeholder="Username"
      />
    </form>
  );
};

ConnectionForm.propTypes = {
  className: PropTypes.string,
};

ConnectionForm.defaultProps = {
  className: '',
};

export default ConnectionForm;
