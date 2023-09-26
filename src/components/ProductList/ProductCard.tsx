import { v4 } from 'uuid'
import './ProductCard.sass'

import {Link} from 'react-router-dom'
import Slider from '../Slider/Slider'
import { Product } from '../../types/ProductList/Product.types'

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (
  {product}: ProductCardProps
  ) => {
  return (
    <div className="product-card-wrapper">
      <Link to={`/product/${product._id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div className="product-card">
          <div className="product-card__images">
            <Slider key={v4()} pics={product.images} />
          </div>

          <div className="product-card-price"> {product.price} </div>

            <div className="product-card-title">
              <p> *ProductName* </p>
            </div>

          <div className="product-card-buy darkwood">
            <span className="button__text">buy</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;