import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Station,
  Journeys,
  Stations,
  Dashboard,
  AddJourney,
  AddStation,
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
        <Route
          path="add"
          element={<AddStation />}
        />
      </Route>
      <Route path="/journeys">
        <Route
          index={true}
          element={<Journeys />}
        />
        <Route
          path="add"
          element={<AddJourney />}
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
