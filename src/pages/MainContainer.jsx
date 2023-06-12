import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyHeader from '../components/Header';
import BodySelectConfig from './BodySelectConfig';
import HomePage from './HomePage';

function MainContainer() {
  return (
    <div>
      <MyHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodySelectConfig/>} />
          <Route path="/home_page" element={<HomePage/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default MainContainer;