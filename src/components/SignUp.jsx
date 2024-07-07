import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SignUp.css';

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <div className="signup-container">
      <h2>{t('Sign Up')}</h2>
      <form>
        <div className="form-group">
          <label>{t('Username')}</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>{t('Email')}</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>{t('Password')}</label>
          <input type="password" required />
        </div>
        <div className="form-group">
          <label>{t('Confirm Password')}</label>
          <input type="password" required />
        </div>
        <button type="submit">{t('Sign Up')}</button>
      </form>
      <p>{t('Already have an account?')} <Link to="/signin">{t('Sign in now')}</Link></p>
    </div>
  );
};

export default SignUp;
