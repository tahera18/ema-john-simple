import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping;
    if (total > 35 || cart.length == 0) {
        shipping = 0;
    } else if(total > 15){
        shipping = 4.99;
    } else{
        shipping = 7.99;
    }
    const tax = total/10;
    const formatAmount = num => Number(num.toFixed(2));
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items: {cart.length}</h5>
    <h5>Product Price: ${formatAmount(total)}</h5>
    <h5>Shipping Cost: ${formatAmount(shipping)}</h5>
    <h5>Tax+VAT: ${formatAmount(tax)}</h5>
    <h5>Total: ${formatAmount((total+shipping+tax))}</h5>
        </div>
    );
};

export default Cart;