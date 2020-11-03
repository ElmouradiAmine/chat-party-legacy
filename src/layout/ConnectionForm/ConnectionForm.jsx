import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ConnectionForm.css';
import Input from '../../components/Input/Input';
import GenderMaleCard from '../../components/Card/GenderMaleCard/GenderMaleCard';
import GenderFemaleCard from '../../components/Card/GenderFemaleCard/GenderFemaleCard';

const ConnectionForm = ({ className }) => {
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState(undefined);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleGenderCardClick = (g) => {
    setGender(g);
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
      <div className="connection-form__gender-selection">
        <GenderMaleCard currentGender={gender} onClick={handleGenderCardClick} />
        <GenderFemaleCard currentGender={gender} onClick={handleGenderCardClick} />
      </div>
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
