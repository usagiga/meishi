import React from 'react';
import './App.scss';
import Portrait from './components/Portrait';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <Portrait />
        <p className="name">usagiga</p>
      </header>
    </div>
  );
}

export default App;
