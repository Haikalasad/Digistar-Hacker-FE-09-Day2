import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../components/productList';

const ProdukDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    
    if (!product) {
        return <div>Product not found!</div>;
    }
    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};


export default ProdukDetail;