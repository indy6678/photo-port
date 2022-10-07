import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from "./components/Nav";

function App() {
  return (
    // html in react is JSX, JavaScript XML, syntax extension system to JS
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;