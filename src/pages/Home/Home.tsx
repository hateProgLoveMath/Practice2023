import React from 'react';
import logo from '../../assets/images/logo.svg';
import '../../assets/styles/Home.css';

import Footer from '../../parts/Footer/Footer';
import Header from '../../parts/Header/Header';

function Home() {
  return (
    <div className="Home">
      <Header />
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default Home;
