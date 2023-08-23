import { randomUUID } from 'crypto'
import { useNavigate } from "react-router";

import Slider from '../Slider/Slider'

import { Product } from '../../types/ProductList/Product.types'

import { PRODUCTS } from '../../mock/ProductList'

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (
  {product}: ProductCardProps
  ) => {
  return (
    <>
      <h1 className="product-card__title"> *ProductName* </h1>
      <div className="product-card_full">
        <div className="product_card__images">

          <Slider key={randomUUID()} pics={PRODUCTS} />

          <div className="product_card-description">
            <div className="product_card__specs"></div>
            <div className="product_card__name"></div>
            <div className="product_card__stat"></div>
            <div className="product_card__price"></div>
            <div className="product_card__price-history"></div>
          </div>
        </div>

        <div className="product_card-description">
          <div className="product_card__specs"> </div>
          <div className="product_card__name"> </div>
          <div className="product_card__stat"> </div>
          <div className="product_card__price"> </div>
          <div className="product_card__price-history"> </div>
        </div>

      </div>
    </>
  );
};

export default ProductCard;