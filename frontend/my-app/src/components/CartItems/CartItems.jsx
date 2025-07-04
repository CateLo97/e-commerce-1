import React, { useContext } from 'react'
import './CartItems.css' 
import { ShopContext } from '../../Context/ShopContext';
import { CiSquareRemove } from "react-icons/ci";

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cart-items'>
            <div className="cart-items-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cart-item-format">
                                <img className='cart-icon-product-icon' src={e.image} alt={e.name} />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <CiSquareRemove 
                                    className="cart-remove-icon"
                                    size={24}
                                    onClick={() => removeFromCart(e.id)}
                                />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="cart-item-down">
                <div className="cart-item-total">
                    <h1>Cart Totals</h1>
                    <div className="cart-item-total-item">
                        <p>Subtotal</p>
                        <p>${ getTotalCartAmount() }</p>
                    </div>
                    <hr />
                       <div className="cart-item-total-item">
                        <p>Shopping Free</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cart-item-total-item">
                        <h3>Total</h3>
                        <h3>${ getTotalCartAmount() }</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                    <div className="cart-item-promocode">
                        <p>if you have a promo code, Enter it here</p>
                        <div className="cart-item-promobox">
                            <input type="text" placeholder='Promo Code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
