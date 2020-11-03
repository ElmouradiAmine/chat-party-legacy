import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  userStatusSelector,
  userLoading,
  userCheckError,
  userErrorSelector,
} from '../../features/user/userSlice';

import './ConnectionForm.css';
import Input from '../../components/Input/Input';
import GenderMaleCard from '../../components/Card/GenderMaleCard/GenderMaleCard';
import GenderFemaleCard from '../../components/Card/GenderFemaleCard/GenderFemaleCard';
import Button from '../../components/Button/Button';

const ConnectionForm = ({ className }) => {
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState(undefined);
  const [error, setError] = useState('');
  const userError = useSelector(userErrorSelector);

  const status = useSelector(userStatusSelector);

  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setError('');
    setUsername(e.target.value);
  };

  const handleGenderCardClick = (g) => {
    setGender(g);
  };

  const validate = () => {
    setError('');
    if (username.trim() === '') {
      setError('Invalid username.');
      return false;
    }
    if (!gender) {
      setError('Select a gender.');
      return false;
    }
    return true;
  };

  const connectUser = () => {
    dispatch(userLoading());
    dispatch({
      type: 'server/connectUser',
      payload: {
        username,
        gender,
      },
    });
    setTimeout(() => {
      dispatch(userCheckError());
    }, 3000);
  };

  useEffect(() => {
    setError(userError);
  }, [userError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (status !== 'loading' && status !== 'connected') {
        connectUser();
      }
    }
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
        <GenderMaleCard
          currentGender={gender}
          onClick={handleGenderCardClick}
        />
        <GenderFemaleCard
          currentGender={gender}
          onClick={handleGenderCardClick}
        />
      </div>
      <Button
        label="join"
        onClick={handleSubmit}
        color="green"
        disabled={status === 'loading'}
      />
      <p
        className="connection-form__error"
        style={{
          visibility: error === '' ? 'hidden' : 'visible',
        }}
      >
        &#9888;
        {' '}
        { error }
      </p>
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
