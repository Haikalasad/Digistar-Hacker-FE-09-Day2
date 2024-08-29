import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ id, name, price, description }) => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="product-item">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <Button 
                label="View Detail" 
                onClick={() => handleNavigate(`/Produk/${id}`)} 
            />
            <Button 
                label="Add to Cart" 
                onClick={() => alert(`${name} added to cart!`)} 
            />
        </div>
    );
};

export default ProductItem;
