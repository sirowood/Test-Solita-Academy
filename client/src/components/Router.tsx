import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// prettier-ignore
import {
  Station,
  Journeys,
  Stations,
  Dashboard,
} from '../pages/index';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard />}
      />
      <Route path="/stations">
        <Route
          index={true}
          element={<Stations />}
        />
        <Route
          path=":id"
          element={<Station />}
        />
      </Route>
      <Route path="/journeys">
        <Route
          index={true}
          element={<Journeys />}
        />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default Router;
