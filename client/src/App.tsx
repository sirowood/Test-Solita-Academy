import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <main className="flex flex-row w-screen h-screen text-white bg-solita-400">
        <Navigation />
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
