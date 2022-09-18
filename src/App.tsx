import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { Navbar } from './@components/ui'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <Navbar>
      <Navbar.Logo>
        <Navbar.Item>Logo</Navbar.Item>
        <Navbar.Burger />
      </Navbar.Logo>
      <Navbar.Menu>
        <Navbar.Item>item1</Navbar.Item>
        <Navbar.Item>item2</Navbar.Item>
        <Navbar.Item>item3</Navbar.Item>

        <Navbar.Align align='end'>
          <Navbar.Item>item6</Navbar.Item>
          <Navbar.Item>item7</Navbar.Item>
        </Navbar.Align>
      </Navbar.Menu>
    </Navbar>
  )
}

export default App
