import React from 'react';
import logo from '../../assets/images/logo.svg';

import './Home.sass';

import Footer from '../../parts/Footer/Footer';
import Header from '../../parts/Header/Header';

import ProductList from '../../components/ProductList/ProductList'

import { PRODUCTS } from '../../mock/Products';


const Home: React.FC = (
) => {
  return (
    <div className="Home">
      <Header />
      <ProductList products={PRODUCTS} />
      <Footer />
    </div>
  );
}

export default Home;
