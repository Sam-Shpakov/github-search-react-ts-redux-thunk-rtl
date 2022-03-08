import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage, EmployeesPage } from '@/pages';

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/second" element={<EmployeesPage />} />
    </Routes>
  );
};

export default RoutesPages;
