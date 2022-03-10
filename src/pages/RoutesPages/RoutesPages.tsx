import { Routes, Route } from 'react-router-dom';

import React from 'react';

import { MainPage, UserPage } from '@/pages';

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/user_:nickname" element={<UserPage />} />
  </Routes>
);

export default RoutesPages;
