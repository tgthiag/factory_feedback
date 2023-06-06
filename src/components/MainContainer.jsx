import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyHeader from './Header';
import BodySelectLanguage from './BodySelectLanguage';
import HomePage from './pages/HomePage';

function MainContainer() {
  return (
    <div>
      <MyHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodySelectLanguage/>} />
          <Route path="/home_page" element={<HomePage/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default MainContainer;