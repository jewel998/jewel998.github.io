import React from 'react';
import './App.css';
import Window from './components/Window';
import Terminal from './components/Terminal';

function App() {
  const terminal = {
    appName: "Terminal",
    version: "0.0.1"
  };
  return (
    <>
      <Window
        applicationDetails={terminal}
        appContext={<Terminal/>}
      />
    </>
  );
}

export default App;
