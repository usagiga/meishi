import React from 'react';
import './App.scss';
import Portrait from './components/Portrait';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <Portrait />
        <p>Usagiga</p>
      </header>
    </div>
  );
}

export default App;
