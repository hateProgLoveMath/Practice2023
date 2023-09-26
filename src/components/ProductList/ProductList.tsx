import React from 'react';

import ProductCard from "./ProductCard";

import { Product } from '../../types/ProductList/Product.types'

import './ProductList.sass'

interface ProductListProps {
  products: Product[]
}

const ProductList = ({products}: ProductListProps) => {

  return (
    <div className="product-list">

      <div className="product-list_header">
        <p> Каталог </p>
      </div>

      <section className="product-list_products">

        {products.map((product) => (
          <ProductCard key={product._id} product={product}/>
        ))}

      </section>

    </div>
  );
};

export default ProductList;