import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Song from './components/Song';
import SongList from './components/SongList';

function App() {
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload again.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <Menu/>
    
    <Greeting name="Anjan" age={22}/>
    <SongList />
    <Footer/>
    </div>

  );
}

export default App;
