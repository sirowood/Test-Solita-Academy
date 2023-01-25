import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Journeys, Stations, Dashboard } from '../pages/index';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard />}
      />
      <Route
        path="/stations"
        element={<Stations />}
      />
      <Route
        path="/journeys"
        element={<Journeys />}
      />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default Router;
