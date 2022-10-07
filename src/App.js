import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';

function App() {
  return (
    // html in react is JSX, JavaScript XML, syntax extension system to JS
    <div>
      <main>
        <About>
        </About>
      </main>
    </div>
  );
}

export default App;