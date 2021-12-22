import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const {name, img, price, stock, seller, star } = props.product;
    return (
        <div className="product">
            <img className="image" src={img} alt="" />
            <div>
                <h3 className="product-name">{name}</h3>
                <p><small>By {seller}</small></p>
                <h4>${price}</h4>
                <p>only-{stock} left in stock - order soon</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating>
                <br />
                <button
                    onClick={()=>props.handleAddToCart(props.product)}
                    className="purchase-button"
                >{element} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;