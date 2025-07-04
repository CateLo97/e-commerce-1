import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { LiaStarSolid } from "react-icons/lia";
import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='Product-Display'>
        <div className="Product-Display-left">
            <div className="Product-Display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>

            <div className="Product-Display-img">
                <img 
                    className='Product-Display-main-img' 
                    src={product.image} 
                    alt=""
                 />
            </div>
        </div>    

        <div className="Product-Display-right">
            <h1>{product.name}</h1>
            <div className="Product-Display-right-star">
                <LiaStarSolid size={24} />
                <LiaStarSolid size={24} />
                <LiaStarSolid size={24} />
                <LiaStarSolid size={24} />
                <LiaStarSolid color="#eee" size={24} />
                <p>(122)</p>
            </div>

            <div className="Product-Display-right-prices">
                <div className="Product-Display-right-price-old">
                    ${product.old_price}
                </div>
                 <div className="Product-Display-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            
            <div className="Product-Display-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae iste dignissimos quas assumenda! Laboriosam repellendus voluptate, ad odit fuga ipsa recusandae facilis, rem deserunt at quibusdam harum expedita pariatur?
            </div>

            <div className="Product-Display-right-size">
                <h1>Select Size</h1>
                <div className="Product-Display-right-zise">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XLL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='Product-Display-right-category'><span> Category: </span> Women, T-short, Crop Top</p>
            <p className='Product-Display-right-category'><span> Tags: </span> Modern, Lastest</p>
        </div>
    </div>
  )
}

export default ProductDisplay