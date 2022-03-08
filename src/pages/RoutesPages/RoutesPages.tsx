import { Routes, Route } from 'react-router-dom';

import React from 'react';

import { MainPage, EmployeesPage } from '@/pages';

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/second" element={<EmployeesPage />} />
  </Routes>
);

export default RoutesPages;
