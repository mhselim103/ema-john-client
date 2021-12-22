import React from 'react';

const ReviewItem = (props) => {
    const { handleRemove } = props;
    const { name, quantity, price, key } = props.product;
    return (
        <div className="product">
            <div>
                <h3 className="product-name">Name :{name}</h3>
                <h3>Price :{ price}</h3>
                <h3>Quantity :{quantity}</h3>
                <button onClick={()=>handleRemove(key)} className="purchase-button"> Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;