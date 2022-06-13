import React, { useEffect } from 'react';
import { Button } from '@arco-design/web-react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    console.log('useEffect');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>

        <Button type="primary">Hello Arco</Button>
      </header>
    </div>
  );
}

export default App;
