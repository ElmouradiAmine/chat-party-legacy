import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ConnectionForm.css';
import Input from '../../components/Input/Input';
import GenderMaleCard from '../../components/Card/GenderMaleCard/GenderMaleCard';
import GenderFemaleCard from '../../components/Card/GenderFemaleCard/GenderFemaleCard';
import Button from '../../components/Button/Button';

const ConnectionForm = ({ className }) => {
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState(undefined);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleGenderCardClick = (g) => {
    setGender(g);
  };

  const validate = () => Boolean(username.trim()) && Boolean(gender);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    // TODO : add submit logic
  };

  return (
    <form className={`connection-form ${className}`} onSubmit={handleSubmit}>
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
      <Button label="join" onClick={handleSubmit} color="green" />
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
