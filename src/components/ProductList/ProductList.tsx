import ProductCard from "./ProductCard";


import { PRODUCTS } from '../../mock/ProductList';

const ProductList = (catRef) => {

  return (
    <>
      <h1 className="">
        Каталог
      </h1>
      <section
        className=""
        ref={catRef}
      >
        {PRODUCTS.map((product) => (
          <ProductCard key={product._id} product={product}/>
        ))}
      </section>
    </>
  );
};

export default ProductList;