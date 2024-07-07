import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SignIn.css';

const SignIn = ({ onSignIn, signedInUser }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    if (username === 'KiuMagaria' && password === '12345678') {
      onSignIn(username);
      setError('');
    } else {
      setError(t('Invalid username or password'));
    }
  };

  if (signedInUser) {
    return (
      <div className="welcome-container">
        <h2>{t('Welcome back, {{user}}', { user: signedInUser })}!</h2>
        <Link to="/">{t('Go to Home Page')}</Link>
      </div>
    );
  }

  return (
    <div className="signin-container">
      <h2>{t('Sign In')}</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label>{t('Username')}</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label>{t('Password')}</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">{t('Sign In')}</button>
      </form>
      {error && <p className="error">{error}</p>}
      <button className="social-signin">{t('Sign in with Google')}</button>
      <button className="social-signin">{t('Sign in with Facebook')}</button>
      <p>{t('Not signed up?')} <Link to="/signup">{t('Sign up now')}</Link></p>
    </div>
  );
};

export default SignIn;
