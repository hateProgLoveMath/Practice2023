import { v4 } from 'uuid'
import './ProductCard.sass'

import Slider from '../Slider/Slider'
import { Product } from '../../types/ProductList/Product.types'

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (
  {product}: ProductCardProps
  ) => {
  return (
    <div className="product-card">
      <p className="product-card_title"> *ProductName* </p>
      <div className="product-card_full">
        <div className="product_card__images">
          <Slider key={v4()} pics={product.images} />
        </div>

        <div className="product_card-description">
          <div className="product_card__specs"> </div>
          <div className="product_card__name"> </div>
          <div className="product_card__stat"> </div>
          <div className="product_card__price"> </div>
          <div className="product_card__price-history"> </div>
        </div>

        <div className="product_card-buy">
          <div className="product_card-buy__price"> </div>

          <button className="buy-button"></button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;