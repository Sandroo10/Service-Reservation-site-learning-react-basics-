import './App.css';
import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';
import Card from './components/Cards';
import cardData from "./components/cardData";
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const cards = cardData.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  const [signedInUser, setSignedInUser] = useState(null);

  const handleSignIn = (username) => {
    setSignedInUser(username);
  };

  return (
    <Router>
      <Navbar signedInUser={signedInUser} />
      <Routes>
        <Route path="/signin" element={<SignIn onSignIn={handleSignIn} signedInUser={signedInUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={
          <>
            <ImageGrid />
            <h1 className='p'>{t('User favourite choices')}</h1>
            <section className='cards-list'>
              {cards}
            </section>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
