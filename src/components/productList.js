import React from 'react';
import ProductItem from './productItem';

export const products = [
    { id: 1, name: 'Banana', price: 10000, description: 'Ini adalah banana' },
    { id: 2, name: 'Apel', price: 10500, description: 'Ini adalah Apel' },
    { id: 3, name: 'Watermelon', price: 10000, description: 'Ini adalah watermelon' },
    { id: 4, name: 'Durian', price: 1500, description: 'Ini adalah Durian' },
    { id: 5, name: 'Peer', price: 2000, description: 'Ini adalah peer' },
    { id: 6, name: 'Avocado', price: 244211, description: 'Ini adalah Avocado' },
    { id: 7, name: 'Ini gatau', price: 1120, description: 'Ini adalah gatau' },
    { id: 8, name: 'Ini gatau 2', price: 17785, description: 'Ini adalah gatau 2' },
    { id: 9, name: 'Ini gatau 3', price: 15640, description: 'Ini gatau 3' },
    { id: 10, name: 'Ini gatau 4', price: 14645, description: 'Ini gatau 4' },
  ];
  
  
  const ProductList = () => {
    console.log('Rendering products:', products);
    return (
        <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    );
  };
  
  export default ProductList;