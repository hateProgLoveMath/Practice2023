import React from 'react';
import logo from '../../assets/images/logo.svg';
import '../../assets/styles/Home.css';

import Footer from '../../parts/Footer/Footer';
import Header from '../../parts/Header/Header';

import ProductList from '../../components/ProductList/ProductList'

import { PRODUCTS } from '../../mock/Products';


function Home() {
  return (
    <div className="Home">
      <Header />
      
      <header className="Home-header">
        <ProductList products={PRODUCTS} />

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
