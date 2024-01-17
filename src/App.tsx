import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {useTranslation} from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const changeLanguage = (newLang: string | undefined) => {
    i18n.changeLanguage(newLang);
  };

  const lng = navigator.language;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          {t('greeting.phrase')}
        </h2>
        <span>
          Browser Language: {lng}
        </span>
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('sv')}>Svenska</button>
        </div>
       
      </header>
    </div>
  );
}

export default App;
