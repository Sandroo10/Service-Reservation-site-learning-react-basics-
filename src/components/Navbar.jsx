import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Navbar({ signedInUser }) {
  const { t } = useTranslation();

  return (
    <nav className='navbar'>
      <img src="../images/Logo.png" className='navlogo' alt='Logo' />
      <ul className='navlinks'>
        <li><Link to="/">{t('Home')}</Link></li>
        <li><Link to="/services">{t('Services')}</Link></li>
        <li><Link to="/contact">{t('Contact Form')}</Link></li>
      </ul>
      <div className='navstuff'>
        {signedInUser ? (
          <span>{signedInUser}</span>
        ) : (
          <Link to="/signin" className="signup">{t('Sign in')}</Link>
        )}
        <div className="language-changer">
          <button onClick={() => i18n.changeLanguage('en')}>ENG</button>
          <button onClick={() => i18n.changeLanguage('geo')}>GEO</button>
        </div>
      </div>
    </nav>
  );
}
