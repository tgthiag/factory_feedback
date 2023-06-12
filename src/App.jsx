import './App.css';
import React from 'react';
import MainContainer from './pages/MainContainer';
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
      <MainContainer/>
      </header>
    </div>
  );
}
// append app to dom
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);

export default App;